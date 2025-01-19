import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  white2: '#FFF8F2',
  black: '#000',
  pink: '#E66767',
  lightPink: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.white2};
    color: ${colors.pink};
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
