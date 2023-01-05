import React from "react"
import styled from "styled-components"

const Image = ({ imgSrc }) => {
	return <ImageContainer src={imgSrc}></ImageContainer>
}

const ImageContainer = styled.img`
	max-width: 6.25rem;
	aspect-ratio: 1 / 1;
`

export default Image
