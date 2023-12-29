import React from "react";
import recent1 from "../../assets/recent1.png";
import recent2 from "../../assets/recent2.png";
import recent3 from "../../assets/recent3.png";
import styled from "styled-components";
const RecentPosts = () => {
  return (
    <Conteiner>
      <Title>Product That I Have</Title>
      <div>
        <RecentWrapper>
          <img src={recent1} alt="r1" />
          <div>
            <p>September 17, 2018 - Tips & Tricks</p>
            <h3>Finding Love & home in Tbilisi, Georgia</h3>
          </div>
        </RecentWrapper>
        <RecentWrapper>
          <img src={recent2} alt="r2" />
          <div>
            <p>September 17, 2018 - Tips & Tricks</p>
            <h3>Finding Love & home in Tbilisi, Georgia</h3>
          </div>
        </RecentWrapper>
        <RecentWrapper>
          <img src={recent3} alt="r2" />
          <div>
            <p>September 17, 2018 - Tips & Tricks</p>
            <h3>Finding Love & home in Tbilisi, Georgia</h3>
          </div>
        </RecentWrapper>
      </div>
    </Conteiner>
  );
};
export default RecentPosts;

const Conteiner = styled.div`
  width: 445px;
  margin-top: 146px;
  margin-bottom: 63px;
`;
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
const RecentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  img {
    margin-right: 8px;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 33.814px;
  }
  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
`;
