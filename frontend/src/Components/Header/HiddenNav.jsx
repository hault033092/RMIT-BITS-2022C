import { bool } from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const HiddenNav = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>About us</a>
      <a href='/'>Pricing</a>
      <a href='/'>Contact</a>
    </StyledMenu>
  )
}

HiddenNav.propTypes = {
  open: bool.isRequired,
}

const StyledMenu = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: gray;
  height: 80vh;
  text-align: left;
  padding: 7rem;
  top: 1;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (min-width: 1300px) {
    width: 100%;
    display: none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 1300px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: black;
    }
  }
`

export default HiddenNav
