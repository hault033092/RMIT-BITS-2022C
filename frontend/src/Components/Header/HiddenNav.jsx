import React from 'react'
import { bool } from 'prop-types'
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
  justify-content: space-around;
  align-items: center;
  background: gray;
  height: 4vh;
  width: 100%;
  text-align: left;
  /* padding: 1rem; */
  top: 4.8rem;
  z-index: -1;
  /* right: 0; */
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(100%)' : 'translateY(0)')};

  a {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: black;
    }
  }
`

export default HiddenNav
