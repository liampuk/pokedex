import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: Inter, sans-serif;
  }

  *, *:after, *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`
