import React from "react"
import styled from "styled-components"
import ObjectiveBox from "./ObjectiveBox"

const LearningObjectivesCard = () => {
	return (
		<Section>
			<Title>Learning Objectives:</Title>
			<Container>
				<ObjectiveBox text="Provides a strong foundation for first time IELTS learners on all 4 skills" />
				<ObjectiveBox text="Emphasizes on the fundamental tactics to succeed in all question types" />
				<ObjectiveBox text="Concisely explain each individual exam: Listening, Speaking, Reading, Writing and their specific requirements/format" />
				<ObjectiveBox text="Help students understand complicated English concepts (Lexical Resource, Fluency, Task Analysis, Advanced Grammar, etc.)" />
			</Container>
		</Section>
	)
}

const Section = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
`

const Title = styled.h1`
	font-size: 1.6rem;
	font-weight: 900;
	text-align: center;
	color: #ffffff;

	@media screen and (min-width: 600px) {
		font-size: 2rem;
		text-align: left;
	}

	@media screen and (min-width: 1200px) {
		font-size: 2.4rem;
		text-align: left;
	}
`

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 1fr);
	gap: 1rem;
	margin: 2rem 0;
	border-radius: 1rem;

	@media screen and (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}
`

export default LearningObjectivesCard
