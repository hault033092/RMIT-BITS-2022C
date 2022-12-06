import React from "react"
import styled from "styled-components"
import ThumbnailImg from "../../assets/thumbnail.jpeg"

const Thumbnail = () => {
	return <Image src={ThumbnailImg}></Image>
}

const Image = styled.img`
	width: 100%;
	border-radius: 2rem;
	margin: 0 0 2rem 0;

	@media screen and (min-width: 1200px) {
		width: 40%;
		margin: 0;
	}
`

export default Thumbnail
