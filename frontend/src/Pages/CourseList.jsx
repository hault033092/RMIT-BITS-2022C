import React from "react"
import styled from "styled-components"
import CourseItem from "../Components/CourseInfo/CourseItem"

const CourseList = () => {
	return (
		<Container>
			<CourseItem
				title="IELTS For Beginners: An in-depth guide"
				rating="4.8"
				author="Nguyen Vu"
			/>
			<CourseItem
				title="IELTS For Beginners: An in-depth guide"
				rating="4.8"
				author="Nguyen Vu"
			/>
			<CourseItem
				title="IELTS For Beginners: An in-depth guide"
				rating="4.8"
				author="Nguyen Vu"
			/>
			<CourseItem
				title="IELTS For Beginners: An in-depth guide"
				rating="4.8"
				author="Nguyen Vu"
			/>
			<CourseItem
				title="IELTS For Beginners: An in-depth guide"
				rating="4.8"
				author="Nguyen Vu"
			/>
			<CourseItem
				title="IELTS For Beginners: An in-depth guide"
				rating="4.8"
				author="Nguyen Vu"
			/>
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	max-width: 100vw;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: 2rem;
	background: linear-gradient(to right, #65dfc9, #6cdbeb);

	@media screen and (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export default CourseList
