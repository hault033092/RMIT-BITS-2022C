import React from "react"
import styled from "styled-components"
import Author from "../Author"
import CreatedDate from "../CreatedDate"
import Duration from "../Duration"
import Price from "../Price"
import Rating from "../Rating"

const CourseDetails = ({ price, rating, duration, author, createdDate }) => {
	return (
		<Container>
			<Price price={price} />
			<Rating rating={rating} />
			<Duration duration={duration} />
			<Author author={author} />
			<CreatedDate createdDate={createdDate} />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr 1fr;
	gap: 1rem;
	margin: 0 0 2rem 0;
`

export default CourseDetails
