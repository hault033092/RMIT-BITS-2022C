import React from "react"
import styled from "styled-components"
import Course from "../Course/Course"
import { FiSearch } from "react-icons/fi"
import IELTS_image from "../../assets/IELTS_image.png"
import SAT_image from "../../assets/SAT_image.png"
import Cambridge_C2_Image from "../../assets/Cambridge_C2_Image.png"

//This is the Styling for each of the English package box on the right of the User Profile Page
const EnglishPackage = () => {
	return (
		<EnglishPackageContainer>
			<MainTitle>Purchased Packages</MainTitle>
			<InputContainer>
				{" "}
				<Input type="text" placeholder="search" />
			</InputContainer>
			<PackageContainer>
				<Course
					image={IELTS_image}
					title="IELTS beginner level"
					GPA="3.5"
					percent="50"
				/>
				<Course
					image={SAT_image}
					title="SAT 1400 level"
					GPA="3.8"
					percent="80"
				/>
				<Course
					image={Cambridge_C2_Image}
					title="Cambridge C2 proficiency"
					GPA="2.8"
					percent="60"
				/>
			</PackageContainer>
		</EnglishPackageContainer>
	)
}

const EnglishPackageContainer = styled.div`
	margin: 5rem 5rem 0 5rem;
	color: #aa0537;
`

const MainTitle = styled.h1``

const InputContainer = styled.div`
	position: relative;
	svg {
		position: absolute;
		right: 10rem;
		top: 1.5rem;
	}
`

const Input = styled.input`
	border-radius: 2rem;
	border: none;
	width: 15rem;
	padding: 0.6rem 1rem;
	margin: 1rem 0 0 0;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(18px);
	-webkit-backdrop-filter: blur(14px);
	font-size: 0.9rem;
	color: #bd063d;
	&::placeholder {
		color: #bd063d;
	}
	&:focus {
		outline: none;
		border: none;
	}
`

const PackageContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export default EnglishPackage
