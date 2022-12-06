import React from "react"
import styled from "styled-components"
import MainCard from "../Components/CourseInfo/MainCard"
import LearningObjectivesCard from "../Components/CourseInfo/LearningObjectivesCard"

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
	padding: 1rem 2rem;
	background: linear-gradient(to right, #0096ff, #7cfc00);
`

export default CourseInfo
