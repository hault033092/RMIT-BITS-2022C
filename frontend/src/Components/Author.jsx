import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CourseAuthor = ({ author }) => {
	return (
		<Container>
			Created by &nbsp;
			<AuthorLink to="/">{author}</AuthorLink>
		</Container>
	)
}

const Container = styled.p`
	font-size: 0.6rem;
	font-style: italic;
	text-align: left;
	grid-column: 1 / span 2;

	@media screen and (min-width: 600px) {
		font-size: 0.8rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1rem;
	}
`

const AuthorLink = styled(Link)`
	font-size: 0.8rem;
	font-style: normal;
	text-decoration: underline;
	color: dodgerblue;

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`

export default CourseAuthor
