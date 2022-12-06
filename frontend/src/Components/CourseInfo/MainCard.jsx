import React from "react"
import styled from "styled-components"
import Description from "./Description"
import Thumbnail from "./Thumbnail"

const MainCard = () => {
	return (
		<Section>
			<Description />
			<Thumbnail />
		</Section>
	)
}

const Section = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column-reverse;
	padding: 1rem;
	margin: 2rem 0;
	border-radius: 1rem;
	background-color: #ffffff;

	@media screen and (min-width: 1200px) {
		justify-content: space-between;
		flex-direction: row;
	}
`

export default MainCard
