import React from "react"
import styled from "styled-components"
import Author from "../Author"
import Button from "../Button"
import Image from "../Image"
import Rating from "../Rating"
import Title from "../Title"

const CourseItem = ({ imgSrc, title, rating, author }) => {
	return (
		<Section>
			<Image imgSrc={imgSrc} />
			<Title title={title} style={{ textAlign: "center" }} />
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
		</Section>
	)
}

const Section = styled.div`
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
