import React from "react";
import styled from "styled-components";
import mindmap from "./mindmap.png"
import Links from "../Header/Links";

const IELTSVisualUI = () => {
    return(
        <Container>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FikAJxtVgOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={mindmap}/>
            <br></br>
            <Button><Links path={'/ieltsquiz'} pageName={'Take Quiz'} /></Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
`
const Button = styled.button`
    margin-left: 4rem;
    background-color: #5050ff;
    border-radius: 4px;
    height: 40px;
    width: 150px;
`



export default IELTSVisualUI;