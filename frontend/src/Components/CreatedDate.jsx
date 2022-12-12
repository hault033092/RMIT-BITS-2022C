import React from "react"
import styled from "styled-components"

const CreatedDate = ({ createdDate }) => {
	return <Container>{createdDate}</Container>
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

export default CreatedDate
