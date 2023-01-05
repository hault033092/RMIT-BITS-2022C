import React, { useState } from 'react'
import AccPageTemplate from '../../Components/Account/AccPageTemplate'
import Verification from '../../Components/Account/Verification'
import CreateAccount from '../../Components/Account/Verification'
import ModeToggle from '../../Components/LightDarkMode/ModeToggle'

const SignUp = () => {
  const [confirmedEmail, setConfirmedEmail] = useState('s123456@rmit.edu.vn')
  const [isVisible, setIsVisible] = useState(false)

  const _handleConfirmedEmail = (confirmedEmail) => {
    setConfirmedEmail(confirmedEmail)
  }

  return (
    <AccPageTemplate
      pageTitle={confirmedEmail !== '' ? 'Create an account' : 'Verification'}
      isCreateAccount={confirmedEmail !== ''}
      isSpinnerVisible={isVisible}
    >
      {confirmedEmail !== '' ? (
        <CreateAccount
          studentEmail={confirmedEmail}
          setIsSpinner={setIsVisible}
        />
      ) : (
        <Verification
          setConfirmedEmail={_handleConfirmedEmail}
          setIsSpinner={setIsVisible}
        />
      )}
      <ModeToggle/>
    </AccPageTemplate>
  )
}

export default SignUp
