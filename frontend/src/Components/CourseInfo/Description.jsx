import React from "react"
import styled from "styled-components"
import Title from "../Title"
import CourseDetails from "./CourseDetails"
import CourseButtons from "./CourseButtons"

import { useNavigate } from "react-router-dom"

const Description = ({
	title,
	subtitle,
	price,
	rating,
	duration,
	author,
	createdDate,
	onButtonClick,
}) => {
	return (
		<Container>
			<Title title={title} subtitle={subtitle} />
			<CourseDetails
				price={price}
				rating={rating}
				duration={duration}
				author={author}
				createdDate={createdDate}
			/>
			<CourseButtons onButtonClick={onButtonClick} />
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
