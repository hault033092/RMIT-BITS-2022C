import React from 'react'

//import components
import SurveyComponents from '../Components/Survey/SurveyComponent'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import styled from 'styled-components'

const SurveyPage = () => {
  return (
    <Container>
      <SurveyComponents />
    </Container>
  )
}

const Container = styled.div`
  padding: 6rem 0 6rem 0;
`

export default SurveyPage
