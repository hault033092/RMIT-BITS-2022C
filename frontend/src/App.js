import React from 'react'
import './app.css'
import Header from './Components/Header/Header'
import ContactUs from './Pages/ContactUs'
import CourseInfo from './Pages/CourseInfo'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import User from './Pages/User'
import CourseList from './Pages/CourseList'
import Pages from './Pages/Pages'
import Footer from './Components/Footer/Footer'
import styled, { createGlobalStyle } from 'styled-components'

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <User /> */}
      {/* <CourseInfo /> */}
      {/* <ContactUs /> */}
      {/* <Signin/> */}
      <Header />
      <Pages />
      <Footer />
    </>
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
