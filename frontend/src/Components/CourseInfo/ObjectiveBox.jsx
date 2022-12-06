import React from "react"
import styled from "styled-components"

const ObjectiveBox = ({ text }) => {
	return (
		<Container>
			<Icon>&#10004;</Icon>
			<ObjectiveText>{text}</ObjectiveText>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	background: linear-gradient(
		135deg,
		rgba(255, 255, 255, 0.1),
		rgba(255, 255, 255, 0.4)
	);
	backdrop-filter: blur(2rem);
	border-radius: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.25);
	padding: 0.5rem;
`

const Icon = styled.p`
	font-size: 1.2rem;
	color: #ffffff;
	margin: 0 1rem 0 0;
	padding: 0;
`

const ObjectiveText = styled.p`
	font-size: 0.8rem;
	color: #ffffff;
	margin: 0;
	padding: 0;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

export default ObjectiveBox
