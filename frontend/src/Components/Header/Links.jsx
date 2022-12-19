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
  text-decoration: none;
`

export default Links
