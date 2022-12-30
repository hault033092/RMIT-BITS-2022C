import React from 'react'
import styled from 'styled-components'
import ParticepsLogo from '../../assets/particeps_final_logo_adobe_express.svg'

const Footer = () => {
  return (
    <Container>
      <FooterLogo src={ParticepsLogo} />
      <FooterMid>
        <h3>PARTICEP CORPORATED &copy;</h3>
        <h4>All rights reserved</h4>
        <h5>Est. 1992 - 2022</h5>
      </FooterMid>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const FooterLogo = styled.img`
  width: 150px;
  height: 150px;
`

const FooterMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 6vh;
`

const FooterRight = styled.div``

export default Footer
