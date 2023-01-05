import React from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'
import Links from './Links'

const HiddenNav = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Links path={'/aboutus'} pageName={'About Us'} />
      <Links path={'/courseinfo'} pageName={'About Us'} />
      <Links path={'/IELTSquiz'} pageName={'Quiz'} />
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
  background: linear-gradient(
    to right,
    var(--teal-background),
    var(--lightblue-background)
  );
  height: 4rem;
  width: 100%;
  text-align: left;
  padding: 1rem;
  top: 1;
  z-index: -1;
  /* right: 0; */
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};

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
