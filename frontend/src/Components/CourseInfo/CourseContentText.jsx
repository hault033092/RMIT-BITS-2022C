import React from "react";
import styled from "styled-components"
import Title from "../Title"

const CourseContentText = ({title, content}) => {
    return(
        <Container>
            <Title title={title}></Title>
            <p>{content}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export default CourseContentText;
