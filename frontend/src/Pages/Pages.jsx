import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AccountInfo from './AccountPages/AccountInfo'
import Home from './Home'
import Payment from './Payment'
import SignUp from './AccountPages/SignUp'
import Survey from './SurveyPage'
import CourseInfo from './CoursePages/CourseInfo'
import ContactUs from './ContactUs'
import Signin from './AccountPages/Signin'
import { SurveyPage } from 'survey-react-ui'
import IELTSquiz from '../Components/Quizzes/IELTSquiz'
import CourseList from './CoursePages/CourseList'
import ResetPassword from './AccountPages/ResetPassword'
import ModeToggle from '../Components/LightDarkMode/ModeToggle'

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
      <Route path='/ieltsquiz' element={<IELTSquiz />} />
      <Route path='/courselist' element={<CourseList />} />
      <Route path='/resetpassword' element={<ResetPassword />} />
      <Route path='/modetoggle' element={<ModeToggle />} />
    </Routes>
  )
}

export default Pages
