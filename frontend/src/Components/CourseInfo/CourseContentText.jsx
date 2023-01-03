import React from "react";
import styled from "styled-components"

const CourseContentText = ({title, content}) => {
    return(
        <Container>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <br/>
        </Container>
    )
}

const Title = styled.h2 `
    font-size: 2.4rem;
    font-weight: 700;
    padding-left: 2rem;
    padding-bottom: 1rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
`
const Content = styled.p`
    font-size: 20px;
	text-align: justify;
	color: #000000;
    padding:0 1rem 2rem 1rem;
    text-indent: 2rem;

`


export default CourseContentText;
