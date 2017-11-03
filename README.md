Dependências:
```sh
yarn install
```

Atualizar o driver:
```sh
npm run webdriver-update
```

Iniciar o driver:
```sh
npm run webdriver-start
```

Executar os testes:
```sh
npm run test
```

Debug:
```sh
browser.pause();
browser.debugger();

'c' para executar o próximo passo
'repl' para entrar no modo interativo
'ctrl-C' para sair

com o browser.debugger(); é necessário uttilizar o debug antes de chamar o config.js:
'protractor debug config.js'
```
