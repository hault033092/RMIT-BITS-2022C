import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import Home from './Home'
import LogIn from './LogIn'
import Payment from './Payment'
import SignUp from './SignUp'
import Survey from './Survey'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/accountinfo' element={<AccountInfo />} />
      <Route path='/survey' element={<Survey />} />
      <Route path='/documentcourse' element={<Home />} />
      <Route path='/visualcourse' element={<Home />} />
      <Route path='/payment' element={<Payment />} />
    </Routes>
  )
}

export default Pages
