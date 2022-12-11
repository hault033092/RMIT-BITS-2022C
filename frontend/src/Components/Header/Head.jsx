import React from 'react'
import styled from 'styled-components'
import ParticepLogo from "frontend\src\assets\particeps_final_logo_adobe_express.svg"

const Head = () => {
  return (
    <HeadContainer>
        <Image>
            <img src={ ParticepLogo } alt="Particeps Logo" />
        </Image>
    </HeadContainer>
  )
}

const HeadContainer = styled.div`
    position: initial;
    margin: 0 0 1rem;
`
const Image = styled.img`
    max-width: 5rem;
    max-height: 5rem;
`
export default Head