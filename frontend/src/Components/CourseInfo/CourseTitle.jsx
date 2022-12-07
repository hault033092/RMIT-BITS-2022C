import React from "react"
import styled from "styled-components"

const CourseTitle = ({ title, subtitle }) => {
	return (
		<Container>
			<Heading>{title}</Heading>
			<SubHeading>{subtitle}</SubHeading>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 2rem 0;
`

const Heading = styled.h1`
	font-size: 1.6rem;
	font-weight: 900;
	text-align: center;

	@media screen and (min-width: 600px) {
		font-size: 2rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 2.4rem;
		text-align: left;
	}
`

const SubHeading = styled.h2`
	font-size: 0.8rem;
	font-weight: 400;
	text-align: center;
	margin: 1rem 0;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
		text-align: left;
	}
`

export default CourseTitle
