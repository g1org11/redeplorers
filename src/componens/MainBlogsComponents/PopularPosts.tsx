import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultTheme } from "../../defaultTheme";

import styled from "styled-components";
import img1 from "../../assets/minipost1.png";
import img2 from "../..//assets/minipost2.png";
import img3 from "../../assets/minipost3.png";
import img4 from "../../assets/minipost4.png";

const PopularPosts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <PostsContainer>
      <Title>Single Item</Title>
      <Slider {...settings}>
        <SliderDivs>
          <Overlay></Overlay>
          <img src={img1} alt="img1" />
          <SliderContent>
            <p>September 17, 2018 - Tips & Tricks</p>
            <h3>Finding Love & home in Tbilisi, Georgia</h3>
          </SliderContent>
        </SliderDivs>
        <SliderDivs>
          <Overlay></Overlay>
          <img src={img2} alt="img2" />
          <SliderContent>
            <p>September 17, 2018 - Tips & Tricks</p>
            <h3>Have you read The Beach by Alex?</h3>
          </SliderContent>
        </SliderDivs>
        <SliderDivs>
          <Overlay></Overlay>
          <img src={img3} alt="img3" />
          <SliderContent>
            <p>September 17, 2018 - Tips & Tricks</p>
            <h3>The writer actually live in Philippines</h3>
          </SliderContent>
        </SliderDivs>
        <SliderDivs>
          <Overlay></Overlay>
          <img src={img4} alt="img4" />
          <SliderContent>
            <p>September 17, 2018 - Tips & Tricks</p>
            <h3>Get away from the maddening Crowds</h3>
          </SliderContent>
        </SliderDivs>
      </Slider>
    </PostsContainer>
  );
};

export default PopularPosts;

const Title = styled.h2`
  margin-top: 42px;
  margin-bottom: 32px;
  padding: 30px 98px 33px 134px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-size: 31.637px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.983px;
`;
const PostsContainer = styled.div`
  width: 445px;
  height: 364px;
  flex-shrink: 0;
  position: relative;
  img {
    width: 100%;
  }
`;

const CustomNextArrow = styled.div`
  position: absolute;
  bottom: -40px;
  transform: translate(50px, 80px);
  transform: tra;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 1;
`;

const CustomPrevArrow = styled.div`
  position: absolute;
  bottom: -40px;
  transform: translate(25px, 80px);
  margin-right: 10px;
  left: 0;
  width: 20px;
  height: 20px;
  z-index: 1;
`;
const SliderDivs = styled.div`
  position: relative;
`;
const SliderContent = styled.div`
  z-index: 2;
  position: absolute;
  top: 33px;
  left: 37px;
  p {
    color: ${defaultTheme.colors.white};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 33.814px;
  }
  h3 {
    margin-top: 50px;
    font-size: 31.637px;
    font-style: normal;
    font-weight: 700;
    line-height: 46.983px;
    color: ${defaultTheme.colors.white};
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 14, 194, 0.3); /* Adjusted fill color and opacity */
  opacity: 0.3;
`;
