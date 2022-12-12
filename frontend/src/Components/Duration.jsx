import React from "react"
import styled from "styled-components"

const Duration = ({ duration }) => {
	return (
		<Container>
			&#128344; &nbsp;
			{duration}
		</Container>
	)
}

const Container = styled.p`
	font-size: 0.8rem;
	text-align: right;
	color: dodgerblue;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

export default Duration
