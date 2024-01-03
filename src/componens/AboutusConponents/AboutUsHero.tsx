import abouthero from "../../assets/aboutus/abouthero.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const AboutUsHero = () => {
  return (
    <HeroContainer>
      <p>About us</p>
    </HeroContainer>
  );
};
export default AboutUsHero;
const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${abouthero});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 547px;
  p {
    color: ${defaultTheme.colors.white};
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;
