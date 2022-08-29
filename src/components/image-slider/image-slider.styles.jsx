import styled from "styled-components";

// import "../../assets/image-slider-images/slider-img-1.jpg";

export const SliderContainer = styled.section`
  width: 80%;
  height: 500px;
`;

export const BackgroundDiv = styled.img`
  width: 100%;
  height: 100%;
  /* background-image: url("../../assets/image-slider-images/slider-img-3.jpg"); */
  /* background-size: cover;
  background-position: center; */
  z-index: 5;
`;

/* ${({ currentSlide }) => `url(${currentSlide[0]})`}; */
