## Rocketseat - Ignite React - 2021

Projetos desenvolvidos ao longo do curso de React da Rocketseat, trilha de 2021, em 2022.

Documentação de cada uma das aplicações (divididas em pastas) presente aqui nesse arquivo, que também contém uma descrição do se trata a aplicação e o que foi usado em cada uma!

Plz, enjoy ;)

-----------------------

Primeiramente, você deve ter as seguintes ferramentas instaladas no seu dispositivo:

### I. Node.js

Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

fonte: https://pt.wikipedia.org/wiki/Node.js

download: https://nodejs.org/en/

### II. Yarn

O Yarn é um sistema de empacotamento de software desenvolvido em 2016 pelo Facebook para o ambiente de tempo de execução JavaScript Node.js.

Yarn é um gerenciador de pacotes, e você pode instalá-lo usando npm, que veio instalado junto com o Node.js, com a seguinte linha de comando:

```
npm install --global yarn
```

fonte: https://en.wikipedia.org/wiki/Yarn_(package_manager)

download: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

### III. Visual Studio Code

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS.

fonte: https://pt.wikipedia.org/wiki/Visual_Studio_Code

download: https://code.visualstudio.com/

-----------------------

## Primeira aplicação: 01 - Github Explorer

Descrição:

Passos:

Primeiramente, vamos inicializar o projeto com o arquivo package.json

```
yarn init -y
```

Nesse arquivo package.json estarão as informações principais desse nosso projeto, como:

- Nome;
- Versão;
- Arquivo principal;
- Licença;

Porém, o mais importante que teremos dentro do projeto são as dependências, que são códigos de terceiros que instalamos dentro da nossa aplicação (bibliotecas).

Começaremos instalando a primeira biblioteca, o React:

```
yarn add react
```

* Obs.: a pasta node_modules carrega o código das dependências que instalamos na nossa aplicação!

Além da dependência react, instalaremos a react-dom:

```
yarn add react-dom
```

Ela permite que o react se comunique com a árvore de elementos do HTML (DOM) (criar elementos em tela, deletar, ...).

Depois, vamos configurar o Babel.

Babel é um transcompilador JavaScript gratuito e de código aberto que é usado principalmente para converter código ECMAScript 2015+ em código JavaScript compatível com versões anteriores que pode ser executado por mecanismos JavaScript mais antigos.

fonte: https://en.wikipedia.org/wiki/Babel_(transcompiler)

```
yarn add @babel/core @babel/cli @babel/present-env -D
```

* Obs2.: dependências de desenvolvimentos são dependências da aplicação que serão usadas apenas no desenvolvimento da mesma, mas que não irão online quando a aplicação estiver pronta!

Depois de instalado, cria-se o arquivo de configuração babel.config.js.

Em relação às dependências, babel/core contém praticamente todas as funcionalidades, enquanto babel/cli é para podermos executar o babel através da linha de comando, e o babel/preset-env é basicamente uma extensão que identifica qual o ambiente que a minha aplicação está sendo executada, para covnerter o código da melhor maneira possível.

Para converter o nosso arquivo (depois de configurado o babel), usaremos a seguinte linha de comando:

```
yarn babel src/index.js --out-file dist/bundle.js
```

Para que o babel consiga entender o código react da aplicação, precisamos instalar mais uma dependência:

```
yarn add @babel/preset-react
```

