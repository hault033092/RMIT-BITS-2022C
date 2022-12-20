import React from "react";
import styled from "styled-components"
import Title from "../Title"

const CourseContentText = ({title, content}) => {
    return(
        <Container>
            <Title title={title}></Title>
            <Content>{content}</Content>
            <br/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 100%;
`
const Content = styled.p`
    font-size: 20px;
	text-align: justify;;
	color: #000000;
`

export default CourseContentText;
