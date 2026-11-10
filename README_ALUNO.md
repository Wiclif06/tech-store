# TechStore DP 2026

## Início rápido

1. Descompacte o pacote mantendo a pasta `tech-store` inteira.
2. Abra a pasta `tech-store` no VS Code.
3. Em computadores Windows, execute `install-offline.cmd` uma vez; nos demais, use as dependências já instaladas.
4. No terminal integrado, execute `npm run dev`.
5. Abra o endereço local apresentado pelo Vite.

O laboratório precisa ter Node.js 20.19.0 ou superior dentro da linha 20, ou 22.12.0 ou superior. O pacote traz as dependências, os dados e as imagens locais, o cache npm para reinstalação offline e um repositório Git com commit inicial. Não execute `npm install`, `npm update` ou `git push` durante a prova.

Em computadores Windows, execute `install-offline.cmd` uma vez antes de iniciar o projeto. Ele reinstala as dependências com o cache incluído, sem internet. Depois, execute `npm run dev`.

## Git local

O histórico já contém o commit de preparação. Durante a prova, faça pelo menos quatro novos commits locais com mensagens claras. Não há remoto configurado e não se deve fazer push.

## Dados e imagens

O arquivo `public/data/produtos.json` e as ilustrações em `public/images/` são locais. Não dependem de API, CDN ou internet.
