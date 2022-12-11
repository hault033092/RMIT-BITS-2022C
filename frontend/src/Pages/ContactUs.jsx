import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import emailjs from 'email-js'
import Button from '../Components/Button'
import Header from '../Components/Header/Header'

const ContactUs = () => {
  const [state, setState] = useState(initalState)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted!')
    console.log(state)

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('')

    console.log('Succeeded!!!')
  }

  const handleInput = (e) => {
    const inputName = e.currentTarget.name
    const value = e.currentTarget.value

    setState((prev) => ({ ...prev, [inputName]: value }))
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_b8l4lff', 'template_8vgw0ab', e.target, 'xA06NoX_nYna9TCy9')
    .then((result) => {
        console.log('SUCCESS!', result.status, result.text)
    }, (error) => {
        console.log(error.text)
    })
    e.target.reset()
  }

  return (
    <>
      <Header/>
      <StyledFormWrapper>
        <StyledForm onSubmit={sendEmail}>
          <h2>Contact Particeps Development Team</h2>
          <label htmlFor='name'>Name</label>
          <StyledInput
            type='text'
            name='name'
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor='email'>Email</label>
          <StyledInput
            type='email'
            name='email'
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor='telegram'>Telegram</label>
          <StyledInput
            type='telegram'
            name='telegram'
            value={state.telegram}
            onChange={handleInput}
          />
          <label htmlFor='message'>Message</label>
          <StyledTextArea
            name='message'
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <Button/>
        </StyledForm>
      </StyledFormWrapper>
    </>
  )
}

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 3rem;
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`
const StyledButton = styled.button`
  display: block;
  background-color: var(--midnightdark);
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`

const initalState = {
  name: '',
  email: '',
  message: '',
  gender: '',
}
export default ContactUs
