import React from 'react'
import styled from 'styled-components'

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Content1>
          <h3>ABOUT PARTICEPS</h3>
          <br />
          <p>
            Particeps is an interactive e-learning web-based application designed to give English learners the best possible tailored experience depending on their prefered studying method. The website has two main interfaces: Visual and text-inclined ones. The Particeps survey will determine if your penchant for which type and reload the page to accomodate users' needs.
          </p>
        </Content1>
        <Content2>
          <h3>UPLOAD YOUR OWN ENGLISH PACKAGES</h3>
          <br />
          <p>
            Here at Particeps, we create job opportunities for freelance teachers on a
            variety of standardized English certificates, including IELTS, SAT, and Cambridge C levels.
          </p>
        </Content2>
        <Content3>
          <h3>QUIZZES</h3>
          <br />
          <p>
            Test your knowledge by engaging our quizzes. 
          </p>
        </Content3>
        <Content4>
          <h3>COMMUNITY GROWTH AND MANAGEMENT</h3>
          <br />
          <p>
            Through skilled moderation and effective promotional campaigns, we
            significantly increase the number of our Telegram
            Community.
          </p>
        </Content4>
        <Content5>
          <h3>ONLINE PAYMENTS</h3>
          <br />
          <p>
            Pay for courses through our online payment system.
          </p>
        </Content5>
        <Content6>
          <h3>ADS-FREE PLATFORMS</h3>
          <br />
          <p>
            Particeps guarantee no advertisements on our platform so users can focus on gaining knowledge.
          </p>
        </Content6>
      </Container>
    </div>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  transition: all 0.25s ease-in-out;
  @media (max-width: 500px) {
    grid-template-columns: auto auto auto;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'content1'
      'content2'
      'content3'
      'content4'
      'content5'
      'content6';
    flex-direction: column;
  }
`

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--lightblue-background);
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  color: black;
  h3 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
`
const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  color: black;
  h3 {
    text-align: center;
  }
  p {
    text-align: justify;
    font-weight: 500;
  }
`
const Content3 = styled(Content1)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Content4 = styled(Content2)``
const Content5 = styled(Content1)``
const Content6 = styled(Content2)``

export default AboutUs
