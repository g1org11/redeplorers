import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import heroimg from "../assets/mian1.png";
import location from "../assets/location.png";
import React from "react";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <p>
          THE COUNTER: <span>70</span> Countries <span>1036</span> Cities
        </p>
        <h1>Leave your mark on all over the world </h1>
        <button>Read More</button>
      </HeroContent>
      <LocationImg src={location} alt="location" />
    </HeroContainer>
  );
};
export default Hero;
const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${heroimg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
`;
const HeroContent = styled.div`
  color: ${defaultTheme.colors.white};
  p {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 20px;
    margin-bottom: 15px;
    span {
      color: ${defaultTheme.colors.orange};
    }
  }
  h1 {
    width: 700px;
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: 89px;
    margin-bottom: 27px;
  }
  button {
    all: unset;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 27px 50px;

    border-radius: 8px;
    background-color: ${defaultTheme.colors.blue};
  }
`;
const LocationImg = styled.img`
  position: absolute;
  bottom: 30px;
  right: 50px;
`;
