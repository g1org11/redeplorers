import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../assets/aboutus/slider1.png";
import slider2 from "../../assets/aboutus/slider2.png";
import slider3 from "../../assets/aboutus/slider3.png";
import slider4 from "../../assets/aboutus/slider4.png";
import slider5 from "../../assets/aboutus/slider5.png";
import slider6 from "../../assets/aboutus/slider6.png";
import slider7 from "../../assets/aboutus/slider7.png";

import styled from "styled-components";
// import "./slider.css";

const AboutUsSlider = () => {
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
          <img src={slider1} alt="mainslider1" />
        </SliderDiv>
        <SliderDiv>
          <img src={slider2} alt="mainslider2" />
        </SliderDiv>
        <SliderDiv>
          <img src={slider3} alt="mainslider3" />
        </SliderDiv>
        <SliderDiv>
          <img src={slider4} alt="mainslider4" />
        </SliderDiv>
        <SliderDiv>
          <img src={slider5} alt="mainslider5" />
        </SliderDiv>
        <SliderDiv>
          <img src={slider6} alt="mainslider2" />
        </SliderDiv>
        <SliderDiv>
          <img src={slider7} alt="mainslider1" />
        </SliderDiv>
      </Slider>
    </Container>
  );
};

export default AboutUsSlider;

const Container = styled.div`
  margin-top: 90px;
`;

const SliderDiv = styled.div`
  width: 150.386px;
  height: 260px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire div */
  }
`;
