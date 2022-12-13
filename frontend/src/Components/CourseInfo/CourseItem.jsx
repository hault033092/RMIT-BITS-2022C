import React from "react"
import styled from "styled-components"
import Author from "../Author"
import Title from "../Title"
import Rating from "../Rating"
import Button from "../Button"

const CourseItem = ({ title, rating, author }) => {
	return (
		<Container>
			<Title title={title} />
			<CourseMainDetails>
				<Rating rating={rating} />
				<Author author={author} />
			</CourseMainDetails>
			<Button
				title="Learn More"
				style={{
					width: "100%",
					background: "black",
					fontSize: "1rem",
					color: "#ffffff",
					padding: "0.5rem",
				}}
			/>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	border-radius: 1rem;
	padding: 1rem;
	background-color: #ffffff;
	box-shadow: 0 1rem 2rem 0 #000000;
`

const CourseMainDetails = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0 0 2rem 0;
`

export default CourseItem
