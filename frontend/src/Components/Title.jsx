import React from "react"
import styled from "styled-components"

const Title = ({ style, title, subtitle }) => {
	return (
		<Container style={style}>
			<Heading>{title}</Heading>
			{subtitle ? <SubHeading>{subtitle}</SubHeading> : null}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 2rem 0;
	text-align: center;

	@media screen and (min-width: 1200px) {
		font-size: 2.4rem;
		text-align: left;
	}
`

const Heading = styled.h1`
	font-size: 1.6rem;
	font-weight: 900;

	@media screen and (min-width: 600px) {
		font-size: 2rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 2.4rem;
	}
`

const SubHeading = styled.h2`
	font-size: 0.8rem;
	font-weight: 400;
	margin: 1rem 0;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

export default Title
