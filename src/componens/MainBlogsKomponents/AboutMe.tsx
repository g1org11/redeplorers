import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import aboutmeimg from "../../assets/aboutmeimg.png";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h3>About Me</h3>
      <img src={aboutmeimg} alt="about me img" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec sit. Mi ut
        risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit
        semper lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo
        scelerisque sed.
      </p>
      <button>Read More</button>
    </AboutMeContainer>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 438.231px;
  height: 598px;
  flex-shrink: 0;
  background-color: ${defaultTheme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h3 {
    font-size: 29.649px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.392px;
  }
  img {
    width: 363.897px;
    height: 293.804px;
    flex-shrink: 0;
  }
  p {
    margin-top: 8px;
    margin-bottom: 17px;
    width: 363px;
    font-size: 16.375px;
    font-style: normal;
    font-weight: 500;
    line-height: 20.637px;
  }
  button {
    all: unset;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 27px 50px;
    border-radius: 8px;
    color: ${defaultTheme.colors.white};
    background-color: ${defaultTheme.colors.blue};
  }
`;
