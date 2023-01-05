import React from "react"
import Pages from "./Pages"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import styled from "styled-components"
import Carousel from "../Components/Carousel/Carousel"
import PromotedCarousel from "../Components/Carousel/PromotedCarousel"
import TextCarousel from "../Components/Carousel/TextCarousel"
import VisualCarousel from "../Components/Carousel/VisualCarousel"
import CourseItem from "../Components/CourseInfo/CourseItem"

const Home = () => {
	return (
		<Container>
			<PromotedCourses>
				<h1>Promoted Courses</h1>
				<PromotedCarousel />
			</PromotedCourses>
			<FeaturedText>
				<h1>Featured Text Courses</h1>
				<TextCarousel />
			</FeaturedText>
			<FeaturedVisual>
				<h1>Featured Visual Courses</h1>
				<VisualCarousel />
			</FeaturedVisual>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`
const PromotedCourses = styled.div`
	padding: 5rem 0 0 0;
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

const FeaturedText = styled.div`
	padding: 5rem 0 0 0;
	border: 1px solid black;
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

const FeaturedVisual = styled.div`
	padding: 5rem 0 0 0;
	border: 1px solid black;
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

export default Home
