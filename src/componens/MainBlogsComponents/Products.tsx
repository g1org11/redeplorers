import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import React from "react";

import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";

const Products = () => {
  return (
    <Conteiner>
      <Title>Recent Post</Title>
      <div>
        <RecentWrapper>
          <img src={prod1} alt="r1" />
          <div>
            <p>Apple MacBook Air MJV2ELL/A 13-inch Laptop </p>

            <h4>$514</h4>
          </div>
        </RecentWrapper>
        <RecentWrapper>
          <img src={prod2} alt="r2" />
          <div>
            <p>Iphone Xs case, Iphone X case, SUPCASE</p>

            <h4>$267</h4>
          </div>
        </RecentWrapper>
        <RecentWrapper>
          <img src={prod3} alt="r2" />
          <div>
            <p>Master Sport band for Apple wrist watch</p>

            <h4>$378</h4>
          </div>
        </RecentWrapper>
      </div>
    </Conteiner>
  );
};

export default Products;
const Conteiner = styled.div`
  width: 445px;
  margin-bottom: 70px;
`;
const Title = styled.h2`
  margin-top: 74px;
  margin-bottom: 42px;
  padding: 30px 98px 33px 134px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-size: 31.637px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.983px;
`;
const RecentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  img {
    margin-right: 8px;
  }
  p {
    width: 330px;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }

  h4 {
    color: ${defaultTheme.colors.blue};
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
`;
