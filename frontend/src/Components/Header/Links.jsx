import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Links = ({ pageName, path }) => {
  return (
    <Container>
      <Link to={path}>{pageName}</Link>
    </Container>
  )
}

const Container = styled.div``

const Link = styled(NavLink)`
  margin: 0 0.75rem;
  text-decoration: none;
  color: var(--theme-golden);
  display: inline-block;
  font-family: var(--font-main);
  font-size: medium;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: yellow;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`

export default Links
