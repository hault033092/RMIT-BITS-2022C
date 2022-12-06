import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CourseDetails = ({ price, rating, duration, author, dateCreated }) => {
	return (
		<Container>
			<CoursePrice>{price}</CoursePrice>
			<CourseRating>
				&#11088; &nbsp;
				{rating}
			</CourseRating>
			<CourseDuration>{duration}</CourseDuration>
			<CourseAuthor>
				Created by &nbsp;
				<AuthorLink to="/">{author}</AuthorLink>
			</CourseAuthor>
			<CourseCreatedDate>{dateCreated}</CourseCreatedDate>
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

const CoursePrice = styled.p`
	font-size: 0.8rem;
	text-align: left;
	color: dodgerblue;
	grid-column: 1;
	grid-row: 1 / 1;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

const CourseRating = styled.p`
	font-size: 0.8rem;
	text-align: center;
	color: dodgerblue;
	grid-column: 2;
	grid-row: 1 / 1;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

const CourseDuration = styled.p`
	font-size: 0.8rem;
	text-align: right;
	color: dodgerblue;
	grid-column: 3;
	grid-row: 1 / 1;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

const CourseAuthor = styled.span`
	font-size: 0.8rem;
	text-align: left;
	grid-column: 1 / span 2;
	grid-row: 2;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

const AuthorLink = styled(Link)`
	font-size: 0.8rem;
	text-decoration: underline;
	color: dodgerblue;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

const CourseCreatedDate = styled.p`
	font-size: 0.8rem;
	text-align: right;
	color: dodgerblue;
	grid-column: 3;
	grid-row: 2;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

export default CourseDetails
