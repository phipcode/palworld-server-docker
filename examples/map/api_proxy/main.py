import os
from fastapi import FastAPI, Request, Response
import httpx

app = FastAPI()

# JA: 環境変数から取得（未指定の場合はデフォルト値を使用）
# EN: Get from environment variables (use default values if not specified)
TARGET_URL = os.getenv("TARGET_URL", "http://palworld:8212")
PAUSED_FILE_PATH = os.getenv("PAUSED_FILE_PATH", "/palworld/.paused")

CACHE_ENDPOINTS = [
    "/v1/api/players",
    "/v1/api/game-data",
    "/v1/api/metrics",
    "/v1/api/info",
]

# JA: キャッシュ格納用データ構造
# EN: Data structure for storing cache
cache = {}


@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def proxy(request: Request, path: str):
    req_path = f"/{path}"

    # JA: .paused ファイルが存在するかチェック
    # EN: Check if the .paused file exists
    is_paused = os.path.exists(PAUSED_FILE_PATH)

    # JA: PAUSE状態で、かつキャッシュがある場合は即座に返却
    # EN: If paused and cache exists, return immediately
    if is_paused and req_path in CACHE_ENDPOINTS and req_path in cache:
        cached_res = cache[req_path]
        return Response(
            content=cached_res["content"],
            status_code=cached_res["status_code"],
            headers=cached_res["headers"],
        )

    # JA: 起床時（または対象外パス）はバックエンドへパススルー
    # EN: Pass through to the backend when waking up (or for non-target paths)
    url = f"{TARGET_URL}{req_path}"
    body = await request.body()

    async with httpx.AsyncClient() as client:
        try:
            resp = await client.request(
                method=request.method,
                url=url,
                headers={
                    k: v
                    for k, v in request.headers.items()
                    if k.lower() != "host"
                },
                content=body,
                timeout=5.0,
            )

            # JA: 正常応答時は最新のレスポンスをキャッシュに更新
            # EN: Update the cache with the latest response if successful
            if req_path in CACHE_ENDPOINTS and resp.status_code == 200:
                cache[req_path] = {
                    "content": resp.content,
                    "status_code": resp.status_code,
                    "headers": dict(resp.headers),
                }

            return Response(
                content=resp.content,
                status_code=resp.status_code,
                headers=dict(resp.headers),
            )

        except (httpx.RequestError, Exception):
            # JA: サーバー未起動・接続エラー時のフォールバック処理
            # EN: Fallback process when the server is not started or there is a connection error
            if req_path in cache:
                cached_res = cache[req_path]
                return Response(
                    content=cached_res["content"],
                    status_code=cached_res["status_code"],
                    headers=cached_res["headers"],
                )

            # JA: 初回起動前などでキャッシュが無い場合は 503 を返してログ汚染を防止
            # EN: Return 503 if there is no cache, e.g., before the first startup, to prevent log pollution
            return Response(
                content='{"error": "Palworld server is starting up or unreachable"}',
                status_code=503,
                media_type="application/json",
            )