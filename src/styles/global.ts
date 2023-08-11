import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['white-300']};
    color: ${(props) => props.theme['black']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }
  
`