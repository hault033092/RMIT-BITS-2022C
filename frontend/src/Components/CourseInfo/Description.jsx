import React from "react"
import styled from "styled-components"
import Title from "../Title"
import CourseDetails from "./CourseDetails"
import CourseButtons from "./CourseButtons"

const Description = () => {
	return (
		<Container>
			<Title
				title="IELTS For Beginners: An in-depth guide"
				subtitle="The perfect course for newbies on their journey to English mastery"
			/>
			<CourseDetails
				price="$19.99"
				rating="4.8"
				duration="24hrs"
				author="Nguyen Vu"
				createdDate="Nov 9, 2022"
			/>
			<CourseButtons />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media screen and (min-width: 1200px) {
		width: 55%;
	}
`

export default Description
