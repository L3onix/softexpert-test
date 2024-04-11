Ainda não concluí o que o desafio propõe, tive dificuldades para conseguir rodar um frontend
React de forma integrada com o Symfony, geralmente eu trabalho em projetos com estrutura de
microserviços, onde eu teria o frontend uma aplicação separada do backend. Sobre o que consegui
desenvolver, como o teste pediu para não utilizar frameworks como Laravel e Symfony, minha ideia
foi utilizar o esqueleto do Symfony apenas para integrar o PHP com o React, e a parte de
conexão e operações com banco de dados, que poderia ser feito utilizando o Doctrine, seria feita
por mim mesmo. Sobre o frontend, como já disse antes, estou utilizando o React, com a biblioteca
ChakraUI, essa escolha foi só um preferência pessoal mesmo, acho que os components fornecidos
por essa biblioteca funcionam muito bem. Nesse projeto acrescentei uma dockerização básica para
o ambiente de desenvolvimento, criando uma forma de facilitar o projeto de ser executado, mas
esta não é uma configuração ideal para deploy em ambiente live, pois processos como o build do
frontend e instalação de dependências do composer deveriam ser feitas durante a construção dos
containers.

## Como rodar o projeto
Depois de baixar o projeto, é necessário instalar as dependências PHP, e depois executar
o docker-composer para criar os container. Segue os comandos abaixo:
```console
$ composer install
```
```console
$ docker-compose up
```
Quando o processo de construção dos containers concluir, você pode acessar o sistema no link
[http://localhost](http://localhost).