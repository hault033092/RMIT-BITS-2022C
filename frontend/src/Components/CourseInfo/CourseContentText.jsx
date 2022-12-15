import React from "react";
import styled from "styled-components"
import Title from "../Title"

const CourseContentText = ({title, content}) => {
    return(
        <div>
            <Title title={title}></Title>
            <p>{content}</p>
        </div>
    )
}

export default CourseContentText;