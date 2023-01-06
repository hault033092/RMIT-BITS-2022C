import React from "react";
import styled from "styled-components";
import Links from "../Header/Links";
import CourseName from "../TextCourses/CourseName"
import TestType from "../TextCourses/TestType";
import { ReadingQuestion } from "./ReadingQuestion";

const IELTSTextUI = () => {
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <CourseName courseName={"Ielts"}/>
            <TestType testType={"Reading"}/>
            <ReadingContent>
                <ReadingTitle>Aphantasia: A life without mental images</ReadingTitle>
                <ReadingTitle>Close your eyes and imagine walking along a sandy beach and then gazing over the horizon as the Sun rises. How clear is the image that springs to mind?</ReadingTitle>
                <p>Most people can readily conjure images inside their head - known as their mind's eye. But this year scientists have described a condition, aphantasia, in which some people are unable to visualise mental images.</p>
                <br></br>
                <p>Niel Kenmuir, from Lancaster, has always had a blind mind's eye. He knew he was different even in childhood. "My stepfather, when I couldn't sleep, told me to count sheep, and he explained what he meant, I tried to do it and I couldn't," he says. "I couldn't see any sheep jumping over fences, there was nothing to count."</p>
                <br></br>
                <p>Our memories are often tied up in images, think back to a wedding or first day at school. As a result, Niel admits, some aspects of his memory are "terrible", but he is very good at remembering facts. And, like others with aphantasia, he struggles to recognise faces. Yet he does not see aphantasia as a disability, but simply a different way of experiencing life.</p>
                <br></br>
                <ReadingTitle>Mind's eye blind</ReadingTitle>
                <p>Ironically, Niel now works in a bookshop, although he largely sticks to the non-fiction aisles. His condition begs the question what is going on inside his picture-less mind. I asked him what happens when he tries to picture his fiancee. "This is the hardest thing to describe, what happens in my head when I think about things," he says. "When I think about my fiancee there is no image, but I am definitely thinking about her, I know today she has her hair up at the back, she's brunette. But I'm not describing an image I am looking at, I'm remembering features about her, that's the strangest thing and maybe that is a source of some regret."</p>
                <br></br>
                <p>The response from his mates is a very sympathetic: "You're weird." But while Niel is very relaxed about his inability to picture things, it is often a cause of distress for others. One person who took part in a study into aphantasia said he had started to feel "isolated" and "alone" after discovering that other people could see images in their heads. Being unable to reminisce about his mother years after her death led to him being "extremely distraught".</p>
                <br></br>
                <ReadingTitle>The super-visualiser</ReadingTitle>
                <p>At the other end of the spectrum is children's book illustrator, Lauren Beard, whose work on the Fairytale Hairdresser series will be familiar to many six-year-olds. Her career relies on the vivid images that leap into her mind's eye when she reads text from her author. When I met her in her box-room studio in Manchester, she was working on a dramatic scene in the next book. The text describes a baby perilously climbing onto a chandelier.</p>
                <br></br>
                <p>"Straightaway I can visualise this grand glass chandelier in some sort of French kind of ballroom, and the little baby just swinging off it and really heavy thick curtains," she says. "I think I have a strong imagination, so I can create the world and then keep adding to it so it gets sort of bigger and bigger in my mind and the characters too they sort of evolve. I couldn't really imagine what it's like to not imagine, I think it must be a bit of a shame really."</p>
                <br></br>
                <p>Not many people have mental imagery as vibrant as Lauren or as blank as Niel. They are the two extremes of visualisation. Adam Zeman, a professor of cognitive and behavioural neurology, wants to compare the lives and experiences of people with aphantasia and its polar-opposite hyperphantasia. His team, based at the University of Exeter, coined the term aphantasia this year in a study in the journal Cortex.</p>
                <br></br>
                <p>Prof Zeman tells the BBC: "People who have contacted us say they are really delighted that this has been recognised and has been given a name, because they have been trying to explain to people for years that there is this oddity that they find hard to convey to others." How we imagine is clearly very subjective - one person's vivid scene could be another's grainy picture. But Prof Zeman is certain that aphantasia is real. People often report being able to dream in pictures, and there have been reported cases of people losing the ability to think in images after a brain injury.</p>
                <br></br>
                <p>He is adamant that aphantasia is "not a disorder" and says it may affect up to one in 50 people. But he adds: "I think it makes quite an important difference to their experience of life because many of us spend our lives with imagery hovering somewhere in the mind's eye which we inspect from time to time, it's a variability of human experience."</p>
            </ReadingContent>
            <br></br>
            <ReadingQuestion/>
            <br></br>
            <Button><Links path={'/ieltsquiz'} pageName={'Take Quiz'} /></Button>
        </div>
    );
}



const ReadingContent = styled.p`
    margin:1rem 7rem;
    border: 3px solid;
    text-align: justify;
    padding: 2rem;
    text-indent: 1rem;
`
const ReadingTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 1rem;
    text-align: center;
`
const Button = styled.button`
    margin-left: 4rem;
    background-color: #5050ff;
    border-radius: 4px;
    height: 40px;
    width: 150px;
`

export default IELTSTextUI