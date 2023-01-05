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
import IELTSquiz from '../Components/Quizzes/IELTSquiz'
import CourseList from './CoursePages/CourseList'
import ResetPassword from './AccountPages/ResetPassword'
import ModeToggle from '../Components/LightDarkMode/ModeToggle'
import User from '../Pages/AccountPages/User'
import AboutUs from './AboutUsPage/AboutUs'
import IELTSTextUI from '../Components/TextCourses/IELTSTextUI'
import IELTSVisualUI from '../Components/VisualCourses/IELTSVisualUI'
import C2Quiz from '../Components/Quizzes/C2quiz'
import SATquiz from '../Components/Quizzes/SATquiz'
import ReviewIELTSQuiz from '../Components/Quizzes/ReviewIELTSQuiz'
import ReviewSATQuiz from '../Components/Quizzes/ReviewSATQuiz'
import ReviewC2Quiz from '../Components/Quizzes/ReviewC2Quiz'

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
      <Route path='/IELTSTextUI' element={<IELTSTextUI />} />
      <Route path='/user' element={<User />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/IELTSVisualUI' element={<IELTSVisualUI />} />
      <Route path='/C2Quiz' element={<C2Quiz />} />
      <Route path='/SATQuiz' element={<SATquiz />} />
      <Route path='/ReviewIELTSQuiz' element={<ReviewIELTSQuiz />} />
      <Route path='/ReviewSATQuiz' element={<ReviewSATQuiz />} />
      <Route path='/ReviewC2Quiz' element={<ReviewC2Quiz />} />
    </Routes>
  )
}

export default Pages
