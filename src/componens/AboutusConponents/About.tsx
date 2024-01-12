import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import dots from "../../assets/aboutus/dots.png";
import React from "react";

const About = () => {
  return (
    <AboutContainer>
      <RightPart>
        <p>
          Hey, We are the <Explorers>Red Explorers</Explorers> Brief History{" "}
          <AboutSpan>About Us.</AboutSpan>{" "}
        </p>
      </RightPart>
      <LeftPart>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac.
          Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare
          nibh vivamus. Quam elementum at velit viverra mattis.
        </p>
        <p>
          Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae
          rhoncus morbi volutpat ante. Adipiscing mauris
        </p>
      </LeftPart>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  margin-top: 650px;
  margin-bottom: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 150px;
  width: 628px;
  height: 177px;
  flex-shrink: 0;
  background-image: url(${dots});
  background-size: cover;
  p {
    width: 505px;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;
    color: #4e4b66;
    font-family: ${defaultTheme.fonts.secondary};
  }
`;
const Explorers = styled.span`
  color: #14142b;
`;
const AboutSpan = styled.span`
  text-decoration-line: underline;
  color: ${defaultTheme.colors.orange};
`;
const LeftPart = styled.div`
  p {
    width: 640px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 222.222% */
    letter-spacing: 0.36px;
  }
`;
