import React, { useState } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ParticepsLogo from '../../assets/particeps_final_logo.png'
import Hamburger from './Hamburger'
import HiddenNav from './HiddenNav'
import Links from './Links'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <Container>
        <HeaderLeft>
          <Links path={'/'} pageName={'CONTACT US'} />
          <Links path={'/contactus'} pageName={'CONTACT US'} />
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
          <Links path={'/contactus'} pageName={'CONTACT US'} />
          <Links path={'/contactus'} pageName={'CONTACT US'} />
        </HeaderRight>
      </Container>
      {/* <BurgerContainer ref={open}>
        <Hamburger open={open} setOpen={setOpen} />
      </BurgerContainer> */}

      {/* <HiddenNavContainer ref={open}>
        <HiddenNav open={open} setOpen={setOpen} />
      </HiddenNavContainer> */}
    </>
  )
}

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8rem;
  width: 100%;
`

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
`

const HeaderCenter = styled.div``

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
`

const BurgerContainer = styled.div``

const HiddenNavContainer = styled.div``

export default Header
