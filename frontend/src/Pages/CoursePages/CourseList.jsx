import React from "react"
import styled from "styled-components"
import CourseItem from "../../Components/CourseInfo/CourseItem"
import ieltsImg from "../../assets/IELTS_image.png"
import c2Img from "../../assets/Cambridge_C2_Image.png"
import satImg from "../../assets/SAT_image.png"

import { useNavigate } from "react-router-dom"

const CourseList = () => {
	const navigate = useNavigate()

	return (
		<Container>
			<CourseItem
				imgSrc={c2Img}
				title="C2 101: A classic representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/courseinfo")}
			/>
			<CourseItem
				imgSrc={ieltsImg}
				title="IELTS 101: A classic representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/courseinfo")}
			/>
			<CourseItem
				imgSrc={satImg}
				title="SAT 101: A classic representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/courseinfo")}
			/>
			<CourseItem
				imgSrc={c2Img}
				title="C2 101: A visual representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/visualcourseinfo")}
			/>
			<CourseItem
				imgSrc={ieltsImg}
				title="IELTS 101: A visual representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/visualcourseinfo")}
			/>
			<CourseItem
				imgSrc={satImg}
				title="SAT 101: A visual representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/visualcourseinfo")}
			/>
			<CourseItem
				imgSrc={c2Img}
				title="C2 102: A classic representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/courseinfo")}
			/>
			<CourseItem
				imgSrc={ieltsImg}
				title="IELTS 102: A classic representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/courseinfo")}
			/>
			<CourseItem
				imgSrc={satImg}
				title="SAT 102: A classic representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/courseinfo")}
			/>
			<CourseItem
				imgSrc={c2Img}
				title="C2 102: A visual representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/visualcourseinfo")}
			/>
			<CourseItem
				imgSrc={ieltsImg}
				title="IELTS 102: A visual representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/visualcourseinfo")}
			/>
			<CourseItem
				imgSrc={satImg}
				title="SAT 102: A visual representation"
				rating="4.8"
				author="Nguyen Vu"
				onButtonClick={() => navigate("/visualcourseinfo")}
			/>
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	max-width: 100vw;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: 2rem;
	// background: linear-gradient(
	//   to right,
	//   var(--teal-background),
	//   var(--lightblue-background)
	// );

	@media screen and (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export default CourseList
