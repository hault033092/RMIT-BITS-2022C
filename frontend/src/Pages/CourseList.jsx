import React from 'react'
import styled from 'styled-components'
import CourseItem from '../Components/CourseInfo/CourseItem'
import ieltsImg from '../assets/IELTS_image.png'
import c2Img from '../assets/Cambridge_C2_Image.png'
import satImg from '../assets/SAT_image.png'

const CourseList = () => {
  return (
    <Container>
      <CourseItem
        imgSrc={c2Img}
        title='IELTS For Beginners: An in-depth guide'
        rating='4.8'
        author='Nguyen Vu'
      />
      <CourseItem
        imgSrc={ieltsImg}
        title='IELTS For Beginners: An in-depth guide'
        rating='4.8'
        author='Nguyen Vu'
      />
      <CourseItem
        imgSrc={satImg}
        title='IELTS For Beginners: An in-depth guide'
        rating='4.8'
        author='Nguyen Vu'
      />
      <CourseItem
        imgSrc={c2Img}
        title='IELTS For Beginners: An in-depth guide'
        rating='4.8'
        author='Nguyen Vu'
      />
      <CourseItem
        imgSrc={ieltsImg}
        title='IELTS For Beginners: An in-depth guide'
        rating='4.8'
        author='Nguyen Vu'
      />
      <CourseItem
        imgSrc={satImg}
        title='IELTS For Beginners: An in-depth guide'
        rating='4.8'
        author='Nguyen Vu'
      />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  background: linear-gradient(
    to right,
    var(--teal-background),
    var(--lightblue-background)
  );

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default CourseList
