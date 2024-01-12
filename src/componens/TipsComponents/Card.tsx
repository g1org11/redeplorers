import marker from "../../assets/tips/Marker.png";
import communication from "../../assets//tips/Communication.png";
import star from "../../assets/tips/Star.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import React from "react";

interface CardProps {
  img: string;
  title: string;
  // You can add more props here if needed
}
const Card: React.FC<CardProps> = ({ img, title }) => {
  return (
    <CardContent>
      <Image src={img} alt="card1" />
      <p>January 15, 2019 - Travel Tips</p>
      <h2>{title}</h2>
      <CardFooter>
        <Cardparts>
          <img src={marker} alt="marker" />
          <span>North Pole</span>
        </Cardparts>
        <Cardparts>
          <img src={communication} alt="communication" />
          <span>12 Comment</span>
        </Cardparts>
        <Cardparts>
          <img src={star} alt="star" />
          <span>4.8 of 5</span>
        </Cardparts>
      </CardFooter>
    </CardContent>
  );
};

export default Card;
const CardContent = styled.div`
  width: 374px;
  border-radius: 30px;
  background-color: ${defaultTheme.colors.white};
  box-shadow: 0px 2.767px 6.226px 0px rgba(0, 0, 0, 0.02),
    0px 6.65px 14.963px 0px rgba(0, 0, 0, 0.03), 0px 12.522px 28.173px 0px rgba(0, 0, 0, 0.04),
    0px 22.336px 50.257px 0px rgba(0, 0, 0, 0.04), 0px 41.778px 94px 0px rgba(0, 0, 0, 0.05),
    0px 100px 225px 0px rgba(0, 0, 0, 0.07);

  p {
    color: ${defaultTheme.colors.gray};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.27px;
    margin-top: 20px;
    margin-bottom: 12px;
    padding-left: 15px;
  }
  h2 {
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    padding: 9px 30px 25px 16px;
    margin-bottom: 20px;
    background-color: ${defaultTheme.colors.blue};
    color: ${defaultTheme.colors.white};
  }
`;
const Image = styled.img`
  border-radius: 30px 30px 0 0;
  width: 374px;
`;
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 15px;
`;
const Cardparts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 22px;
  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: ${defaultTheme.colors.darkblue};
  }
`;
