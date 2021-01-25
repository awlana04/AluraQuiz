import { createGlobalStyle, ThemeProvider } from 'styled-components'

import db from '../db.json';

const theme = db.theme; 

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

    color: ${({ theme }) => theme.colors.contrastText};
    font-family: 'Lato', sans-serif;

    display: flex;
    flex-direction: column;
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;

    display: flex;
    flex-direction: column;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
