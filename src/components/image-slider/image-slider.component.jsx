import { useState } from "react";

import { BackgroundDiv, SliderContainer } from "./image-slider.styles";

export const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideUrls = [
    "../../assets/image-slider-images/slider-img-1.jpg",
    "../../assets/image-slider-images/slider-img-2.jpg",
    "../../assets/image-slider-images/slider-img-3.jpg",
    "../../assets/image-slider-images/slider-img-2.jpg",
  ];
  return (
    <SliderContainer>
      <BackgroundDiv
        currentSlide={slideUrls}
        src={slideUrls[3]}
      ></BackgroundDiv>
    </SliderContainer>
  );
};
