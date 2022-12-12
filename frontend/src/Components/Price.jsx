import React from "react"
import styled from "styled-components"

const Price = ({ price }) => {
	return <Container>{price}</Container>
}

const Container = styled.p`
	font-size: 0.8rem;
	text-align: left;
	color: dodgerblue;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

export default Price
