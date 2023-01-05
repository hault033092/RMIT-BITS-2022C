import React from "react"
import styled from "styled-components"
import Description from "./Description"
import Thumbnail from "./Thumbnail"

import { useNavigate } from "react-router-dom"

const VisualMainCard = () => {
	const navigate = useNavigate()

	return (
		<Section>
			<Description
				title="IELTS 101: A visual representation"
				subtitle="The perfect course for newbies on their journey to English mastery"
				price="$19.99"
				rating="4.8"
				duration="24hrs"
				author="Nguyen Vu"
				createdDate="Nov 9, 2022"
				onButtonClick={() => navigate("/IELTSVisualUI")}
			/>
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
	margin: 0 0 2rem 0;
	border-radius: 1rem;
	background-color: #ffffff;
	box-shadow: 0 1rem 3rem 0 #000000;

	@media screen and (min-width: 1200px) {
		justify-content: space-between;
		flex-direction: row;
	}
`

export default VisualMainCard
