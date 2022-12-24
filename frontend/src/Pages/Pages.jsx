import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import Home from './Home'
import Payment from './Payment'
import SignUp from './SignUp'
import Survey from './SurveyPage'
import CourseInfo from './CourseInfo'
import ContactUs from './ContactUs'
import Signin from './Signin'
import { SurveyPage } from 'survey-react-ui'
import IELTSquiz from '../Components/Quizzes/IELTSquiz'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/accountinfo' element={<AccountInfo />} />
      <Route path='/survey' element={<Survey />} />
      <Route path='/documentcourse' element={<Home />} />
      <Route path='/visualcourse' element={<Home />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/courseinfo' element={<CourseInfo />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/surveypage' element={<SurveyPage />} />
      <Route path='/ieltsquiz' element={<IELTSquiz />} />
    </Routes>
  )
}

export default Pages
