"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[166],{8942:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var o=r(4848),t=r(8453);const s={sidebar_position:4},n="Re\xednicio Autom\xe1tico",d={id:"guides/automatic-reboots",title:"Re\xednicio Autom\xe1tico",description:"Configurar rein\xedcio servidor autom\xe1tico com CRON",source:"@site/i18n/pt-PT/docusaurus-plugin-content-docs/current/guides/automatic-reboots.md",sourceDirName:"guides",slug:"/guides/automatic-reboots",permalink:"/pt-PT/guides/automatic-reboots",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/automatic-reboots.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Utilizar webhooks do discord",permalink:"/pt-PT/guides/discord/discord-webhooks"},next:{title:"Atualiza\xe7\xf5es Autom\xe1ticas",permalink:"/pt-PT/guides/automatic-updates"}},c={},a=[{value:"Configurar rein\xedcio servidor autom\xe1tico com CRON",id:"configurar-rein\xedcio-servidor-autom\xe1tico-com-cron",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"re\xednicio-autom\xe1tico",children:"Re\xednicio Autom\xe1tico"}),"\n",(0,o.jsx)(i.h2,{id:"configurar-rein\xedcio-servidor-autom\xe1tico-com-cron",children:"Configurar rein\xedcio servidor autom\xe1tico com CRON"}),"\n",(0,o.jsxs)(i.p,{children:["Para poder utilizar os rein\xedcios autom\xe1ticos com este servidor,\nas seguintes vari\xe1veis de ambiente ",(0,o.jsx)(i.strong,{children:"t\xeam"})," de ser definidas como ",(0,o.jsx)(i.code,{children:"true"}),":"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"RCON_ENABLED"})}),"\n"]}),"\n",(0,o.jsxs)(i.admonition,{type:"warning",children:[(0,o.jsxs)(i.p,{children:["Se a reinicializa\xe7\xe3o do docker n\xe3o estiver definida como ",(0,o.jsx)(i.code,{children:"always"})," ou ",(0,o.jsx)(i.code,{children:"unless-stopped"}),",\no servidor ser\xe1 desligado e precisar\xe1 ser reiniciado manualmente."]}),(0,o.jsxs)(i.p,{children:["Os ficheiros de exemplo docker run command e docker compose em ",(0,o.jsx)(i.a,{href:"/pt-PT/",children:"Configura\xe7\xe3o r\xe1pida"})," utilizam esta defini\xe7\xe3o."]})]}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Vari\xe1vel"}),(0,o.jsx)(i.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(i.th,{children:"Valor Predefinido"}),(0,o.jsx)(i.th,{children:"Valores Aceites"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"AUTO_REBOOT_CRON_EXPRESSION"}),(0,o.jsx)(i.td,{children:"Frequ\xeancia de reinicio de servidor autom\xe1tico"}),(0,o.jsx)(i.td,{children:"0 0 * * *"}),(0,o.jsxs)(i.td,{children:["Precisa de uma express\xe3o do CRON. Ver - ",(0,o.jsx)(i.a,{href:"/pt-PT/guides/automatic-reboots",children:"Configurar rein\xedcio servidor com CRON"})]})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"AUTO_REBOOT_ENABLED"}),(0,o.jsx)(i.td,{children:"Permite reiniciar servidor automaticamente"}),(0,o.jsx)(i.td,{children:"false"}),(0,o.jsx)(i.td,{children:"true/false"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"AUTO_REBOOT_WARN_MINUTES"}),(0,o.jsx)(i.td,{children:"Tempo de espera para reiniciar o servidor, depois de informar os jogadores."}),(0,o.jsx)(i.td,{children:"5"}),(0,o.jsx)(i.td,{children:"!0"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"AUTO_REBOOT_EVEN_IF_PLAYERS_ONLINE"}),(0,o.jsx)(i.td,{children:"Reiniciar servidor mesmo que hajam jogadores online."}),(0,o.jsx)(i.td,{children:"false"}),(0,o.jsx)(i.td,{children:"true/false"})]})]})]}),"\n",(0,o.jsx)(i.admonition,{type:"tip",children:(0,o.jsxs)(i.p,{children:["Esta imagem usa o Supercronic para os crons.\nConsultar ",(0,o.jsx)(i.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"supercronic"}),"\nou ",(0,o.jsx)(i.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,o.jsxs)(i.p,{children:["Definir ",(0,o.jsx)(i.code,{children:"AUTO_REBOOT_CRON_EXPRESSION"})," para alterar o hor\xe1rio definido,\npor defeito \xe9 todas as noites \xe0 meia-noite de acordo com o fuso hor\xe1rio definido com ",(0,o.jsx)(i.code,{children:"TZ"})]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>n,x:()=>d});var o=r(6540);const t={},s=o.createContext(t);function n(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);