import React from "react";
import styled from "styled-components";
import Links from "../Header/Links";

const ButtonLink = ({path, pageName}) => {
    return(
        <div>
            <Button><Links path={path} pageName={pageName}/></Button>
        </div>
    )
}

const Button = styled.button`
    background-color: #0f52e4d3;
`

export default ButtonLink