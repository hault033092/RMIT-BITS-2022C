import React from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Carousel = () => {
  return (
    <Splide
      options={{
        perPage: 4,
        arrows: true,
        pagination: true,
        drag: 'free',
        gap: '5rem',
      }}
    >
      <SplideSlide></SplideSlide>
      <SplideSlide></SplideSlide>
      <SplideSlide></SplideSlide>
      <SplideSlide></SplideSlide>
      <SplideSlide></SplideSlide>
    </Splide>
  )
}

export default Carousel
