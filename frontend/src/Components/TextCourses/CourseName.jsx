import React from "react";
import styled from "styled-components";

const CourseName = ({courseName}) => {
    return(
        <Course>
            {courseName}
        </Course>
    )
}

const Course = styled.h1`
    font: var(--font-main);
    text-align: center;
    font-size: 2.6rem;
    font-weight: 800;
    margin-bottom: 0px;
`

export default CourseName;