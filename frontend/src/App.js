import React from 'react'
import './app.css'
import Header from './Components/Header/Header'
import ContactUs from './Pages/ContactUs'
import CourseInfo from './Pages/CoursePages/CourseInfo'
import Home from './Pages/Home'
import Signin from './Pages/AccountPages/Signin'
import User from './Pages/User'
import CourseList from './Pages/CoursePages/CourseList'
import SignUp from './Pages/AccountPages/SignUp'
import CourseContentText from './Components/CourseInfo/CourseContentText'
import IeltsTextLearner from './Pages/CoursePages/IeltsTextLearner'
import { createGlobalStyle } from 'styled-components'
import SurveyPage from './Pages/SurveyPage'
import Footer from './Components/Footer/Footer'
import Pages from './Pages/Pages'
import Reading from './Components/TextCourses/Reading'
import CourseItem from './Components/CourseInfo/CourseItem'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <SurveyPage/>
      <SignUp/>
      <CourseInfo />
      <ContactUs/>
      <Header/>
      <Signin/>
      <CourseList />
    <IeltsTextLearner/> */}
      <Header />
      <Pages />
      <Footer />
      {/* <Reading/> */}
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
