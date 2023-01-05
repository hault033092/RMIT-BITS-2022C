import React from "react"
import styled from "styled-components"
import MainCard from "../../Components/CourseInfo/MainCard"
import LearningObjectivesCard from "../../Components/CourseInfo/LearningObjectivesCard"

const CourseInfo = () => {
	return (
		<Container>
			<MainCard />
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
	padding: 5rem 2rem 2rem 2rem;
	// background-color: rgba(0, 150, 255, 0.65);
	// background-color: #89cff0;
	// background: linear-gradient(#7cfc00, #0096ff);
	/* background: white; */
`

export default CourseInfo
