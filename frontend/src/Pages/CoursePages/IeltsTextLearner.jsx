import React from "react";
import CourseContentText from "../../Components/CourseInfo/CourseContentText";
import styled from "styled-components";

const IeltsTextLearner = ({courseName}) => {
    return (
        <div>
            <Heading>Hello world</Heading>
             <CourseContentText
                title={"Ielts"}
                content={"Ielts is a free, open source software engineer that helps students quickly learn and learn from scratch."} />
    
            <CourseContentText
                title={"Ielts"}
                content={"Ielts is a free, open source software engineer that helps students quickly learn and learn from scratch."} />
        </div>
           
    )
}

const Heading = styled.h1`
    font: var(--font-main);
    text-align: center;
    font-size: 2.6rem;
    font-weight: 800;
    margin-bottom: 50px;
`

export default IeltsTextLearner;