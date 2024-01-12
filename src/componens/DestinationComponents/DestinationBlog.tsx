import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import dots from "../../assets/aboutus/dots.png";
import React from "react";

const DestinationBlog = () => {
  return (
    <Container>
      <RightPart>
        <p>
          <AboutSpan>Where do</AboutSpan> you want to go?
        </p>
      </RightPart>
      <LeftPart>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac.
          Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare
          nibh vivamus. Quam elementum at velit viverra mattis.
        </p>
      </LeftPart>
    </Container>
  );
};

export default DestinationBlog;
const Container = styled.div`
  margin-top: 500px;
  margin-bottom: 141px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 200px;
  width: 737px;
  height: 207.721px;
  flex-shrink: 0;
  background-image: url(${dots});
  background-size: cover;
  p {
    width: 636px;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.black};
    font-family: ${defaultTheme.fonts.secondary};
  }
`;

const AboutSpan = styled.span`
  text-decoration-line: underline;
  color: ${defaultTheme.colors.orange};
`;
const LeftPart = styled.div`
  p {
    width: 449px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 222.222% */
    letter-spacing: 0.36px;
    text-align: justify;
  }
`;
