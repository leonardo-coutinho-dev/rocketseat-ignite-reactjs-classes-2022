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

Descrição: Aplicação feita para consumir a API do github que contém as informações do usuário, como nome, descrição do perfil, quantidade de repositórios, nome dos repositórios, descrição, ... apresentando essas informações em tela.

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

Em relação às dependências, babel/core contém praticamente todas as funcionalidades, enquanto babel/cli é para podermos executar o babel através da linha de comando, e o babel/preset-env é basicamente uma extensão que identifica qual o ambiente que a minha aplicação está sendo executada, para converter o código da melhor maneira possível.

Para converter o nosso arquivo (depois de configurado o babel), usaremos a seguinte linha de comando:

```
yarn babel src/index.js --out-file dist/bundle.js
```

Para que o babel consiga entender o código react da aplicação, precisamos instalar mais uma dependência:

```
yarn add @babel/preset-react
```

Também vamos configurar na nossa aplicação o Webpack, que muitas vezes é utilizado em conjunto com o Babel. Muitas vezes dentro da nossa aplicação, não importamos apenas arquivos JavaScript, importamos também, por exemplo, arquivos CSS/SASS e arquivos de imagem (PNG, JPG, ...). O webpack vai pegar todos esses demais arquivos, e converter em arquivos que são entendidos pelo browser diretamente.

```
yarn add webpack webpack-cli -D
```

Assim como o babel, criamos uma arquivo de configuração, dessa vez chamado webpack.config.js.

Depois de configurado, para converter o código basta utilizar:

```
yarn webpack
```

Para não ter que criar a tag script dentro do arquivo index.html para puxar o arquivo bundle.js, podemos instalar o seguinte plugin:

```
yarn add html-webpack-plugin -D
```

Depois, realizar as devidas configurações no arquivo webpack.config.json.

No próximo passo, usaremos a funcionalidade dev-server de dentro do webpack, instalando a seguinte dependência:

```
yarn add webpack-dev-server
```

O objetivo é automatizar, fazer com que o webpack fique observando os arquivos de dentro da pasta source e toda vez que houver uma alteração ele cria o bundle.js novamente.

Feito isso, podemos executar:

```
yarn webpack serve
```

E a aplicação será iniciada na porta :8080.

Posteriormente, vamos configurar uma funcionalidade dentro do webpack chamada source-map, que é uma forma de conseguirmos visualizar o código original da nossa aplicação, mesmo ele estando dentro do arquivo bundle.js.

Também instalaremos a dependência cross-env, que serve para definir variáveis de ambiente independente do sistema operacional da pessoa.

```
yarn add cross-env -D
```

Instalaremos, ainda, duas bibliotecas para lidar com as importações de arquivos de estilos dentro da nossa aplicação:

```
yarn add style-loader css-loader -D
```

E, por último, instalaremos a dependência sass-loader para lidar com os arquivos .sass.

```
yarn add node-sass sass-loader -D
```

Além do mais, instalaremos as seguintes dependências:

```
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

Esse plugin faz com que quando alteramos algo no código da nossa aplicação e salvamos, essas alterações são refletidas no browser porém mantendo o estado dos componentes. Depois de instaladas, precisamos realizar as devidas configurações no webpack.config.js.

Instaladas as dependências, nossa aplicação foi estruturada, conforme código que pode visualizar, e para iniciá-la no seu dispositivo, basta executar os comandos:

```
git clone https://github.com/leonardo-coutinho-dev/rocketseat-ignite-reactjs-classes-2022.git
```

Para clonar o repositório e:

```
yarn
```

Para instalar todas as dependências e, finalmente:

```
yarn dev
```

O que deve iniciar a sua aplicação no endereço localhost:8080! Great hack ;)
