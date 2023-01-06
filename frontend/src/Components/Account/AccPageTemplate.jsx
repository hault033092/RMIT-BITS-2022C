import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/* Components */
import { FlexContainer } from "./FlexContainer";
import Spinner from "./Spinner";
import Image from "./Image";

/* Data */
import Interactive_Interface from "../../assets/illustration/Interactive_Interface.svg"
// import MainLogoSrc from "../../assets/logo-rmit.png";
import learning_English from "../../assets/illustration/learning_English.svg";
import Quiz from "../../assets/illustration/Quiz.svg";

/* Styled Components */
const MainCont = styled(FlexContainer)`
	width: 80vw;
	height: 90vh;
	margin: 5vh auto;
	background-color: ${props => props.theme.screenColor};
	@media (max-width: 820px) {
		width: 70vw;
		flex-direction: column;
	}
`;

const SideCont = styled(FlexContainer)`
	width: 90%;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 5vw;
`;

const InputCont = styled(FlexContainer)`
	flex-direction: column;
	width: ${props => (props.isCreateAccount ? "100%" : "70%")};
	height: ${props => (props.isCreateAccount ? "100%" : "90%")};
	padding: 3%;
	background-color: lightblue;
	border-radius: 30px;
`;

const StyledTitle = styled.p`
	color: ${props => props.theme.fontColorWhite};
	font-weight: 700;
	font-size: 2.5vw;
	margin: 2vw;
`;

/* AutoSlideshow*/

const SlideShow = styled.div`
	margin: 0 auto;
	overflow: hidden;
	width: 35vw;
	max-width: 600px;
	@media (max-width: 820px) {
		display: none;
	}
`;
const SlideShowSlider = styled.div`
	white-space: nowrap;
	transition: ease 1000ms;
`;
const Slide = styled.div`
	display: inline-block;
	position: relative;
	height: 40vh;
	width: 100%;
`;
const SlideShowDots = styled.div`
	text-align: center;
`;
const SlideShowDot = styled.div`
	display: inline-block;
	height: 15px;
	width: 15px;
	border-radius: 50%;
	cursor: pointer;
	margin: 0 5px;
	background-color: ${props =>
		props.isCurrentSlide ? props.theme.mainBlue : props.theme.darkGrey};
`;

const Desc = styled.p`
	position: absolute;
	width: auto;
	height: 0;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	text-align: center;
	font-weight: 700;
	font-size: 2vw;
	color: ${props => props.theme.slideMsg};
`;

const AutoSlideshow = ({ images, delayTime }) => {
	const [currentIdx, setCurrentIdx] = React.useState(0);
	const timeoutRef = React.useRef(null);

	const ImgStyle = { width: "100%", height: "100%", filter: "brightness(40%)" };

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	const handleChangeIdx = () => {
		const numOfImg = images.length;
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setCurrentIdx(prevIndex =>
					prevIndex === numOfImg - 1 ? 0 : prevIndex + 1
				),
			delayTime
		);
	};

	useEffect(() => {
		handleChangeIdx();
		return () => {
			resetTimeout();
		};
	}, [currentIdx]);

	return (
		<SlideShow>
			<SlideShowSlider
				style={{ transform: `translate3d(${-currentIdx * 100}%, 0, 0)` }}>
				{images.map((item, index) => (
					<Slide key={index}>
						<Image src={item.src} style={ImgStyle} />
						<Desc>{item.desc}</Desc>
					</Slide>
				))}
			</SlideShowSlider>

			<SlideShowDots>
				{images.map((item, index) => (
					<SlideShowDot
						key={index}
						isCurrentSlide={currentIdx === index}
						onClick={() => {
							setCurrentIdx(index);
						}}></SlideShowDot>
				))}
			</SlideShowDots>
		</SlideShow>
	);
};

/* Data */
const imagesData = [
	{ src: learning_English, desc: "Choose from different courses!" },
	{ src: Interactive_Interface, desc: "Different UI\nfor visual and text learners" },
	{
		src: Quiz,
		desc: "Test your knowledge!",
	},
];

const AccPageTemplate = ({
	children,
	pageTitle,
	isCreateAccount,
	isSpinnerVisible,
}) => {
	return (
		<MainCont>
			<SideCont>
				{/* <Image
					src={MainLogoSrc}
					alt={"Particeps Main Logo Image"}
					style={{
						width: "30vw",
						height: "30vh",
					}}
				/> */}
				<AutoSlideshow images={imagesData} delayTime={4000} />
			</SideCont>
			<InputCont isCreateAccount={isCreateAccount}>
				<StyledTitle>{pageTitle}</StyledTitle>
				{children}
			</InputCont>
			<Spinner isVisible={isSpinnerVisible} isFullSize />
		</MainCont>
	);
};

AccPageTemplate.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	isCreateAccount: PropTypes.bool,
	isSpinnerVisible: PropTypes.bool,
};

export default AccPageTemplate;