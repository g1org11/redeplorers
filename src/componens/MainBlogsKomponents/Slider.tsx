import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainslider1 from "../../assets/mainslider1.png";
import mainslider2 from "../../assets/mianslider2.png";
import mainslider3 from "../../assets/mainslider3.png";
import mainslider4 from "../../assets/mainslider4.png";
import mainslider5 from "../../assets/mainslider5.png";
import styled from "styled-components";
// import "./slider.css";

const SimpleSlider = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };

  return (
    <Container>
      <style>
        {`
          .slick-list {
            margin: 0 !important;
            padding: 0 !important;
          }
        `}
      </style>
      <Slider {...settings}>
        <SliderDiv>
          <img src={mainslider1} alt="mainslider1" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider2} alt="mainslider2" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider3} alt="mainslider3" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider4} alt="mainslider4" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider5} alt="mainslider5" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider2} alt="mainslider2" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider1} alt="mainslider1" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider5} alt="mainslider5" />
        </SliderDiv>
        <SliderDiv>
          <img src={mainslider4} alt="mainslider4" />
        </SliderDiv>
      </Slider>
    </Container>
  );
};

export default SimpleSlider;

const Container = styled.div`
  margin-top: 90px;
`;

const SliderDiv = styled.div`
  width: 260.7px;
  height: 296px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire div */
  }
`;
