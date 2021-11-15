# Projeto FIPE

Aplicação que acessa a API da Parallelum para pesquisar o preço de um veículo com base na tabela FIPE.

Desenvolvido em Next.js, Typescript, Redux, Styled-components e Material-UI.
Testado em Jest(testing library) e cypress.

## Estrutura do projeto

A maior parte das configurações da aplicação estão no diretório `src`.

Dentro desta pastas os componentes e regras de negócio estão organizados dessa forma:

- components
  - Diretório onde guardar componentes mais génericos ou globais da aplicação.
- modules
  - Diretório para componentes com regra de negócio e que podem ser transferidos de página(evitando amarração com a página).
- layouts
  - Diretório para criar templates de layouts globais para aplicação.
- pages
  - Diretório para concentrar os componentes das páginas que são carregadas com o auto-loading do Next.
- stores
  - Diretório onde os principais componentes da store estão.
- services
  - Diretório para armazenar os serviços para operações na aplicação.
- api
  - Diretório com o encapsulamento de serviços para aplicação, exemplo: ``

## Getting Started

Para iniciar a aplicação local:

```bash
yarn dev
```

- Rota [local](http://localhost:3000).
- Rota [web vercel](https://project-fipe.vercel.app/).

## Testing

```bash
yarn test # Rodar todos os testes.
yarn test:unit # Rodar teste unitário.
yarn test:e2e # Rodar teste end-to-end.
```
