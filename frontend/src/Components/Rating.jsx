import React from "react"
import styled from "styled-components"

const Rating = ({ rating }) => {
	return (
		<Container>
			&#11088; &nbsp;
			{rating}
		</Container>
	)
}

const Container = styled.p`
	font-size: 0.8rem;
	text-align: center;
	color: dodgerblue;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

export default Rating
