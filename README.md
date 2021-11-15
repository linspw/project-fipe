
<div style="display:flex;justify-content:center;"><img src="https://user-images.githubusercontent.com/43552865/141843813-699b67f9-bbaa-440a-a813-514c70781f17.png"></div>

# Introdução Projeto FIPE

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

## Screenshots
### Desktop
![desktop-2](https://user-images.githubusercontent.com/43552865/141843428-99a1954e-08c6-401f-9a60-e5b6924849df.png)
![desktop-3](https://user-images.githubusercontent.com/43552865/141843431-e7f7490a-732f-4858-b7d4-23ef905dc3e2.png)
### Mobile
![mobile-2](https://user-images.githubusercontent.com/43552865/141843433-2ce3f328-f6ed-41fe-a284-3db62bb8d597.png)
![mobile-3](https://user-images.githubusercontent.com/43552865/141843434-8122b9f6-0b2e-4e5a-b97d-60dc935ae5bf.png)


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
