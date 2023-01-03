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

const Container = styled.div`
  background-color: red;
  width: 15rem;
  height: 4rem;
  padding: 1rem;
  margin: 2rem;
  border-radius: 25%;
  text-align:center;
  /* border: 1px solid black; */
  &:hover{
  background-color: blue;
  transform: scale(1.2);
  transition: 0.25s ease-in-out;
  }
`

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
`

export default Links
