import React from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import testImg from '../../assets/IELTS_image.png'

const VisualCarousel = () => {
  return (
    <CarouselContainer
      options={{
        perPage: 4,
        arrows: true,
        pagination: true,
        drag: 'free',
        gap: '5rem',
      }}
    >
      <SplideSlide>
        <p>Test Course</p>
        <img src={testImg} alt='' />
      </SplideSlide>
      <SplideSlide>
        <p>Test Course</p>
        <img src={testImg} alt='' />
      </SplideSlide>
      <SplideSlide>
        <p>Test Course</p>
        <img src={testImg} alt='' />
      </SplideSlide>
      <SplideSlide>
        <p>Test Course</p>
        <img src={testImg} alt='' />
      </SplideSlide>
      <SplideSlide>
        <p>Test Course</p>
        <img src={testImg} alt='' />
      </SplideSlide>
      <SplideSlide>
        <p>Test Course</p>
        <img src={testImg} alt='' />
      </SplideSlide>
    </CarouselContainer>
  )
}

const CarouselContainer = styled(Splide)`
  img {
    width: 150px;
    height: 150px;
  }
`

export default VisualCarousel
