[![CircleCI Status](https://circleci.com/gh/paulohfcanuto/es6e2eTest.svg?style=shield)](https://circleci.com/gh/paulohfcanuto/es6e2eTest)
### Dependências:
```sh
npm install yarn -g
npm config set strict-ssl false
yarn
```

### Atualizar o webdriver:
```sh
yarn run webdriver-update
```


### Iniciar o webdriver:
```sh
yarn run webdriver-start
```


### Executar os testes:
```sh
yarn run google-search
```

### Debugando um Teste
Para depurar um teste, coloque um 'debugger;' no código
```javascript
When(/^I type cucumber/, () => {
  debugger;
  return googleSearch.searchTextBox.sendKeys("cucumber");
});
```
Após isso, o "inspect-brk" deve ser utilizado para iniciar o teste, ficando
```
    node --inspect-brk={porta} bin/protractor <config_file>
```
OBS: Com Node.js 8+ não é possível utilizar browser.debugger() e browser.pause();
Para mais informações deve ser consultada a [doc](http://www.protractortest.org/#/debugging)



### Estrutura de arquivos do projeto
```sh
es6e2eTest/
├── reports/
├── src/
|   ├── features/
|   ├── config/
|   ├── pages/
|   ├── stepdefinitions/
|   ├── support/
|   |    |──ElementHelper.js
|   |    |──hooks.js
|   |    |──Reporter.js
```


### Nomenclatura dos arquivos
```sh
features/{recurso}.{nome}.feature         //exemplo: google.search.feature
config/{recurso}.{nome}.config.js         //exemplo: google.search.config.js
pages/{nome}{recurso}.js                  //exemplo: GoogleSearch.js usar o PascalCase no nome do arquivo e no nome da classe
stepdefinitions/{recurso}.{nome}.step.js  //exemplo: google.search.step.js

OBS: Seguir essa nomenclatura o máximo possível para garantir um bom entendimento do funcionamento dos testes.
```


### Caso de teste
Com o cucumber como test runner, é possível utilizar os casos de testes em dois formatos:
```sh
Feature: Uso de Calculadora Angular

    @tag
    Scenario: nome do Scenario
        When passos
        Then passos

 ou:

 Feature: Uso de Calculadora Angular
    @tag
    Scenario Outline: nome do Scenario Outline
        Given passos
        When eu adicionei o número <numero1> e o número <numero2>
        Then a calculadora retorna o resultado <resultado>

        Examples:
            | numero1 | numero2 | resultado |
            | 10      | 22      | "32"   |
            | 99      | 123     | "222"  |
            | 12      | 99      | "111"  |
```
