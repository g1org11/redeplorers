import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import dots from "../../assets/aboutus/dots.png";

const CostumerSays = () => {
  return (
    <AboutContainer>
      <RightPart>
        <p>
          What <AboutSpan>Customer says</AboutSpan> <Explorers>About us</Explorers>?
        </p>
      </RightPart>
      <LeftPart>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.Lorem, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Facilisis ut.
        </p>
      </LeftPart>
    </AboutContainer>
  );
};

export default CostumerSays;

const AboutContainer = styled.div`
  /* margin-top: 650px; */
  margin-bottom: 105px;
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
    width: 410px;
    height: 121px;
    flex-shrink: 0;
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
