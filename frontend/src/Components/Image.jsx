import React from 'react'
import styled from 'styled-components'

const Image = ({ imgSrc }) => {
  return <ImageContainer src={imgSrc}></ImageContainer>
}

const ImageContainer = styled.img`
  width: 100px;
  height: 100px;
  /* aspect-ratio: 1 / 1; */
`

export default Image
