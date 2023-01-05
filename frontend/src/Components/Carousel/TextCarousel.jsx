import React from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'
import CourseItem from '../CourseInfo/CourseItem'

import c2Img from '../../assets/Cambridge_C2_Image.png'
import ieltsImg from '../../assets/IELTS_image.png'
import satImg from '../../assets/SAT_image.png'

import { useNavigate } from 'react-router-dom'

const TextCarousel = () => {
  const navigate = useNavigate()

  return (
    <CarouselContainer
      options={{
        height: '30rem',
        perPage: 3,
        arrows: true,
        pagination: true,
        gap: '5rem',
        autoScroll: {
          pauseOnFocus: true,
          pauseOnHover: true,
          rewind: true,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <CourseItem
          imgSrc={c2Img}
          title='C2 101: A classic representation'
          rating='4.8'
          author='Nguyen Vu'
          onButtonClick={() => navigate('/courseinfo')}
        />
      </SplideSlide>
      <SplideSlide>
        <CourseItem
          imgSrc={ieltsImg}
          title='IELTS 101: A classic representation'
          rating='4.8'
          author='Nguyen Vu'
          onButtonClick={() => navigate('/courseinfo')}
        />
      </SplideSlide>
      <SplideSlide>
        <CourseItem
          imgSrc={satImg}
          title='SAT 101: A classic representation'
          rating='4.8'
          author='Nguyen Vu'
          onButtonClick={() => navigate('/courseinfo')}
        />
      </SplideSlide>
      <SplideSlide>
        <CourseItem
          imgSrc={c2Img}
          title='C2 Intermediate: A classic representation'
          rating='4.8'
          author='Nguyen Vu'
          onButtonClick={() => navigate('/courseinfo')}
        />
      </SplideSlide>
      <SplideSlide>
        <CourseItem
          imgSrc={ieltsImg}
          title='IELTS Intermediate: A classic representation'
          rating='4.8'
          author='Nguyen Vu'
          onButtonClick={() => navigate('/courseinfo')}
        />
      </SplideSlide>
      <SplideSlide>
        <CourseItem
          imgSrc={satImg}
          title='SAT Intermediate: A classic representation'
          rating='4.8'
          author='Nguyen Vu'
          onButtonClick={() => navigate('/courseinfo')}
        />
      </SplideSlide>
    </CarouselContainer>
  )
}

const CarouselContainer = styled(Splide)`
  width: 100%;
  /* height: 50vh; */
  display: flex;
  align-items: center;

  /* img {
    width: 150px;
    height: 150px;
  } */
`

export default TextCarousel
