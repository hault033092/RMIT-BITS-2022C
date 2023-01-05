import React from "react";
import styled from "styled-components";
import mindmap from "./mindmap.png"

const ReadingVisual = () => {
    return(
        <Container>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FikAJxtVgOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <img src={mindmap}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`



export default ReadingVisual;