import React from "react"
import styled from "styled-components"
import EnglishPackage from "../../Components/Course/EnglishPackage"
import SideBar from "../../Components/Course/SideBar"

const User = () => {
	return (
		<Container>
			<Card>
				<SideBar />
				<EnglishPackage />
			</Card>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
	height: 100vh;
	background: #ee0979;
	background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
	background: linear-gradient(to right, #ff6a00, #ee0979);
`

const Card = styled.div`
	height: 90vh;
	width: 80vw;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(18px);
	-webkit-backdrop-filter: blur(14px);
	border-radius: 10px;
	display: flex;
`

export default User
