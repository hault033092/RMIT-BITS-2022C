import React from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'
import testImg from '../../assets/IELTS_image.png'
import CourseItem from '../CourseInfo/CourseItem'

const PromotedCarousel = () => {
  return (
    <CarouselContainer
      options={{
        perPage: 4,
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
        <CourseItem />
      </SplideSlide>
      <SplideSlide>
        <CourseItem />
      </SplideSlide>
      <SplideSlide>
        <CourseItem />
      </SplideSlide>
      <SplideSlide>
        <CourseItem />
      </SplideSlide>
      <SplideSlide>
        <CourseItem />
      </SplideSlide>
      <SplideSlide>
        <CourseItem />
      </SplideSlide>
    </CarouselContainer>
  )
}

const CarouselContainer = styled(Splide)`
  width: 100%;
  height: 50vh;

  /* img {
    width: 150px;
    height: 150px;
  } */
`

export default PromotedCarousel
