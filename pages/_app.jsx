import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        background-color: #3a3b3b;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    a{
    text-decoration: none;
    }
`

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
