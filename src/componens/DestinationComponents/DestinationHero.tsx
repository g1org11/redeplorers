import hero from "../../assets/destination/herodestination.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const DestinationHero = () => {
  return (
    <HeroContainer>
      <p>Destination</p>
    </HeroContainer>
  );
};

export default DestinationHero;
const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 422px;
  p {
    color: ${defaultTheme.colors.white};
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;
