import React from "react"
import styled from "styled-components"
import Button from "../Button"

const CourseButtons = () => {
	return (
		<Container>
			<Button
				title="Add to Cart"
				style={{
					width: "40%",
					background: "darkblue",
					fontSize: "1rem",
					color: "#ffffff",
					padding: "0.5rem",
				}}
			/>
			<Button
				title="Buy Now"
				style={{
					width: "40%",
					background: "red",
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
	justify-content: space-between;
`

export default CourseButtons
