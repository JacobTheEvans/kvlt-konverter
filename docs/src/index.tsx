import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { OptionsProvider } from './OptionsContext'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    width: 100%;
  }

  * {
    box-sizing: border-box
  }

  #root {
    width: 100%;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <OptionsProvider>
      <App />
    </OptionsProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
