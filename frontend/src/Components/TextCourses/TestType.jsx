import React from "react";
import styled from "styled-components";

const TestType = ({testType}) => {
    return(
        <Test>{testType}</Test>
    )
}

const Test = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 1rem;
    text-align: center;
`
export default TestType;