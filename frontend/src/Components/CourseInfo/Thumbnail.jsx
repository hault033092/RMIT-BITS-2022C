import React from "react"
import styled from "styled-components"
import ThumbnailImg from "../../assets/thumbnail.jpeg"

const Thumbnail = () => {
	return (
		<Container>
			<ImageContainer src={ThumbnailImg}></ImageContainer>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 1200px) {
		width: 40%;
	}
`

const ImageContainer = styled.img`
	border-radius: 2rem;
	margin: 0 0 2rem 0;

	@media screen and (min-width: 1200px) {
		margin: 0;
	}
`

export default Thumbnail
