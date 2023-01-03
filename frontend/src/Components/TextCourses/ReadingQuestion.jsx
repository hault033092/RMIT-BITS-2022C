import React from 'react'
import styled from 'styled-components'

export const ReadingQuestion = () => {
  return (
    <div>
        <Form>
            <p><strong>Questions 1–5</strong></p>
            <br></br>
            <p>Do the following statements agree with the information in the IELTS reading text? </p>
            <p>In boxes <strong>1-5</strong> on your answer sheet, write        </p>
            <br></br>
            <p><strong>TRUE</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the information </p>
            <br></br>
            <p><strong>FALSE</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the information </p>
            <br></br>
            <p><strong>NOT GIVEN</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if there is no information on this        </p>
            <br></br>
            <br></br>
            <p><strong>1.</strong> Aphantasia is a condition, which describes people, for whom it is hard to visualise mental images. <br></br>
                <select id="select1">
                    <option>TRUE</option>
                    <option value="1">FALSE</option>
                    <option>NOT GIVEN</option>
                </select>   <span id="s1"> </span> </p>
            <br></br>
            <p> <strong>2.</strong> Niel Kenmuir was unable to count sheep in his head. <br></br>
                <select id="select2">
                    <option value="1">TRUE</option>
                    <option>FALSE</option>
                    <option>NOT GIVEN</option>
                </select>   <span id="s2"> </span> </p>
                <br></br>
            <p> <strong>3. </strong>People with aphantasia struggle to remember personal traits and clothes of different people.<br></br>
                <select id="select3">
                    <option>TRUE</option>
                    <option>FALSE</option>
                    <option value="1">NOT GIVEN</option>
                </select>   <span id="s3"> </span> </p>
            <br></br>
            <p> <strong>4. </strong>Niel regrets that he cannot portray an image of his fiancee in his mind.<br></br>
                <select id="select4">
                    <option value="1">TRUE</option>
                    <option>FALSE</option>
                    <option>NOT GIVEN</option>
                </select>   <span id="s4"> </span> </p>
            <br></br>
            <p><strong>5. </strong>Inability to picture things in someone's head is often a cause of distress for a person.<br></br>
                <select id="select5">
                    <option value="1">TRUE</option>
                    <option>FALSE</option>
                    <option>NOT GIVEN</option>
                </select>   <span id="s5"> </span> </p>
            <br></br>
            <p> <strong>6. </strong>All people with aphantasia start to feel 'isolated' or 'alone' at some point of their lives.<br></br>
                <select id="select6">
                    <option>TRUE</option>
                    <option>FALSE</option>
                    <option value="1">NOT GIVEN</option>
                </select>   <span id="s6"> </span> </p>
            <br></br>
            <p> <strong>7. </strong>Lauren Beard's career depends on her imagination.<br></br>
                <select id="select7">
                    <option value="1">TRUE</option>
                    <option>FALSE</option>
                    <option>NOT GIVEN</option>
                </select>   <span id="s7"> </span> </p>
            <br></br>
            <p> <strong>8. </strong>The author met Lauren Beard when she was working on a comedy scene in her next book.<br></br>
                <select id="select8">
                    <option>TRUE</option>
                    <option value="1">FALSE</option>
                    <option>NOT GIVEN</option>
                </select>   <span id="s8"> </span> </p>
            <br></br>
            <br></br>
            <p><strong>Questions 9–13</strong></p>
            <br></br>
            <p>Complete the sentences below.</p>
            <br></br>
            <p>Write <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer. </p>
            <br></br>
            <p>Write your answers in boxes <strong>9-13</strong> on your answer sheet.</p>
            <br></br>
            <br></br>
            <p><strong>9. </strong>Only a small fraction of people have imagination as <input type="text" id="ex9" required=""></input> as Lauren does. 
            <span id="s9"> </span></p>
            <br></br>
            <p><strong>10. </strong>Hyperphantasia is 
            <input type="text"id="ex10" required=""></input> to aphantasia. 
            <span id="s10"> </span></p>
            <br></br>
            <p><strong>11.</strong>There are a lot of subjectivity in comparing people's imagination - somebody's vivid scene could be another person's <input type="text" id="ex11" required=""></input>. 
            <span id="s11"> </span></p>       
            <br></br> 
            <p><strong>12.</strong> Prof Zeman is 
            <input type="text" id="ex12" required=""></input> that aphantasia is not an illness. 
            <span id="s12"> </span></p>
            <br></br>
            <p><strong>13.</strong> Many people spend their lives with 
            <input type="text" id="ex13" required=""></input> somewhere in the mind's eye. 
            <span id="s13"> </span></p>
        </Form>
    </div>
  )
}

const Form = styled.form`
    margin: 0 4rem;
`
