FROM python:3.12-slim

WORKDIR /app

# 依存パッケージのインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードのコピー
COPY main.py .

# コンテナが待機するポートの指定
ENV PROXY_PORT=8212
ENV LOG_LEVEL=warning

# uvicornでFastAPIサーバーを起動
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PROXY_PORT} --log-level ${LOG_LEVEL} --no-access-log"]
