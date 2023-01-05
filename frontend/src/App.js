import React from 'react'
import './app.css'
import Header from './Components/Header/Header'
import { createGlobalStyle } from 'styled-components'
import Footer from './Components/Footer/Footer'
import Pages from './Pages/Pages'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Pages />
      <Footer />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
  //Fonts
  --font-main: 'Vidaloka', serif;

  //Colors
  --teal-background: #65dfc9;
  --lightblue-background: #6cdbeb;

  //View sizes
  --small-view: 1300px;
  
}

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--theme-navyviolet);
    min-height: 100vh;
    overflow: auto;
  }
`


export default App
