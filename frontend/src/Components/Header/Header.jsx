import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ParticepsLogo from '../../assets/particeps_final_logo.png'
import Hamburger from './Hamburger'
import HiddenNav from './HiddenNav'
import Links from './Links'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const Header = () => {
  const [open, setOpen] = useState(false)
  // const node = useRef()
  useOnClickOutside(() => setOpen(false))

  return (
    <div>
      <Container>
        <HeaderLeft>
          <Links path={'/contactus'} pageName={'CONTACT US'} />
          <Links path={'/aboutus'} pageName={'ABOUT PARTICEPS'} />
        </HeaderLeft>
        <HeaderCenter>
          <NavLink to='/'>
            <img
              src={ParticepsLogo}
              style={{ width: '100px', height: '100px' }}
            />
          </NavLink>
        </HeaderCenter>
        <HeaderRight>
          <Links path={'/survey'} pageName={'SURVEY'} />
          <Links path={'/login'} pageName={'ACCOUNT'} />
        </HeaderRight>
      </Container>
      <BurgerContainer>
        <Hamburger open={open} setOpen={setOpen} />
      </BurgerContainer>
      <HiddenNavContainer>
        <HiddenNav open={open} setOpen={setOpen} />
      </HiddenNavContainer>
    </div>
  )
}

const Container = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
  width: 100%;
  z-index: 5;
  background-color: transparent;
`

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`

const HeaderCenter = styled.div`
  &:hover {
    transition: 0.25s ease-in-out;
    transform: scale(1.1);
    opacity: 70%;
  }
`

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
`

const BurgerContainer = styled.div``

const HiddenNavContainer = styled.div``

export default Header
