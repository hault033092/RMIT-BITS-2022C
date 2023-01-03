import React from "react";
import styled from "styled-components";
import CourseName from "./CourseName";
import TestType from "./TestType";

const Reading = () => {
    return(
        <div>
            <CourseName courseName={"Ielts"}/>
            <TestType testType={"Reading"}/>
            <ReadingContent><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deserunt suscipit quam dolor molestias voluptatum dicta facere soluta qui veritatis reiciendis incidunt vel? Perferendis cupiditate ullam natus, velit error laudantium.</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nostrum consequuntur quos, necessitatibus fuga nesciunt dicta asperiores distinctio ipsum quas totam beatae? Eligendi numquam neque quam. Sint illum possimus repellat.</p>
            </ReadingContent>
        </div>
    );
}



const ReadingContent = styled.p`
    margin:1rem 4rem;
    border: 3px solid;
    text-align: justify;
    padding: 2rem;
    text-indent: 1rem;
`

export default Reading;