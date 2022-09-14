## Segunda aplicação: 02 - dt money

Para iniciar a segunda aplicação, utilizaremos o create-react-app. Mas o que é o create-react-app?

O create-react-app é um conjunto de ferramentas e funcionalidades pré-configuradas para que você possa iniciar um projeto React.

Então, no seu terminal de comando, digite:

```
yarn create react-app [nome_da_aplicacao] --template typescript
```

Isso deve iniciar a sua aplicação com as configurações do Babel, Webpack e Typescript já pré-configuradas para você apenas começar a codar!

Uma coisa muito importante, é que toda configuração do Webpack e do Babel não fica "visível" quando utilizamos o create-react-app, mas ficam dentro de um pacote chamado "react-scripts". Portanto, não temos acesso para fazer mudanças nessas configurações pré-estabelecidas, de forma direta. Se precisarmos alterar alguma configuração, temos o script "eject" (que é um script que não tem mais volta), que serve justamente para trazer toda a configuração para a pasta raiz.

* Obs.: recomenda-se utilizar a estrutura sem ejetar!

Vamos começar nossa aplicação instalando uma biblioteca CSS-in-JS, chamada Styled Components. CSS-in-JS é uma técnica de estilo pela qual o JavaScript é usado para estilizar componentes. Quando esse JavaScript é analisado, o CSS é gerado e anexado ao DOM.

Para instalar tal biblioteca, utilizaremos a seguinte linha de comando:

```
yarn add styled-components
```

O styled-components tem a sua tipagem, ou seja, sua integração com o typescript, separada do código principal. Portanto, também teremos que instalar:

```
yarn add @types/styled-components -D
```

Assim que terminada uma boa parte visual da aplicação, teriamos que fazê-la funcionar realmente (os dados virem de alguma API, de um banco de dados, conseguir cadastrar novas transações e essas transações ficarem persistidas para termos acesso a elas depois, ...). Não podemos simplesmente deixar dados estáticos jogados no HTML, pois consumir uma API é muito diferente de deixar a aplicação apenas com dados estáticos. No dia-a-dia, isso significaria conectar o front-end com o back-end (programado em PHP, Python, Ruby, Node.js, ...). Nesta aplicação, especificamente, trabalharemos não tendo um back-end pronto. Porém, temos algumas ferramentas que podemos utilizar, sendo algumas delas:

- json-server: https://github.com/typicode/json-server
- Mirage JS: https://miragejs.com/
- MSW JS: https://mswjs.io/

Para citar algumas. Essas ferramentas são utilizadas para simular APIs, ou seja, para criar APIs que são fictícias até que termos o nosso back-end pronto. Essas ferramentas só podem ser utilizadas para ambiente de desenvolvimento e ambiente de testes, mas para ambiente de produção elas jamais serão utilizadas.

No nosso caso, iremos utilizar o Mirage JS para construir nossa fake API! Para tal, utilize a seguinte linha de comando:

```
yarn add miragejs
```

E a biblioteca será instalada na sua aplicação.

-----------------------