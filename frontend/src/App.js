import React from 'react'
import './app.css'
import Header from './Components/Header/Header'
import ContactUs from './Pages/ContactUs'
import CourseInfo from './Pages/CourseInfo'
import Signin from './Pages/Signin'
import User from './Pages/User'
import CourseList from './Pages/CourseList'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
    <div>
      <SignUp/>
      <CourseInfo />
      <ContactUs/>
      <Header/>
      <Signin/>
      <CourseList />
    </div>
  )
}

export default App
