import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html, body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export { GlobalStyle };
