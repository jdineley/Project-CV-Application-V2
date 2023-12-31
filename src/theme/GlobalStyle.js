import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    font-size: 62.5%;
    line-height: 1.6;
    /* Footer support */
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
  }

  header {
    font-size: 3rem;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5rem;
    border-radius: 5px;
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.colors.dark}
  }

  button {
    cursor: pointer;
    padding: 5px;
    width: 100%;
  }
`

export default GlobalStyle
