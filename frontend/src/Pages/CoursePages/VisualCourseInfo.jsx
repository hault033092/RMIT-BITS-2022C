import React from "react"
import styled from "styled-components"
import VisualMainCard from "../../Components/CourseInfo/VisualMainCard"
import LearningObjectivesCard from "../../Components/CourseInfo/LearningObjectivesCard"

const VisualCourseInfo = () => {
	return (
		<Container>
			<VisualMainCard />
			<LearningObjectivesCard />
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	max-width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	// background-color: rgba(0, 150, 255, 0.65);
	// background-color: #89cff0;
	// background: linear-gradient(#7cfc00, #0096ff);
	background: linear-gradient(
		to right,
		var(--teal-background),
		var(--lightblue-background)
	);
`

export default VisualCourseInfo
