import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  branco2: '#FFF8F2',
  preto: '#000',
  rosa: '#E66767',
  rosaClaro: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco2};
    color: ${cores.rosa};
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }
`
