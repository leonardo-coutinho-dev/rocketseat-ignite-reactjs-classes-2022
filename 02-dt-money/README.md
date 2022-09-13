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

-----------------------