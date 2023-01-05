import React from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'
import Links from './Links'

const HiddenNav = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Links path={'/courselist'} pageName={'Course List'} />
      <Links path={'/aboutus'} pageName={'About Us'} />
      <Links path={'/contactus'} pageName={'Contact Us'} />
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
  /* padding: 1rem; */
  top: 1;
  /* z-index: 0 */
  /* right: 0; */
  transition: transform 0.3s linear;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  /* display: ${({ open }) => (open ? 'flex' : 'none')}; */

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
