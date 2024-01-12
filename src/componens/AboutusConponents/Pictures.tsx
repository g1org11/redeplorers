import marshal from "../../assets/aboutus/marshal.png";
import tesla from "../../assets/aboutus/tesla.png";
import kitkat from "../../assets/aboutus/kitkat.png";
import boss from "../../assets/aboutus/boss.png";
import styled from "styled-components";
import React from "react";

const Pictures = () => {
  return (
    <Container>
      <img src={marshal} alt="marsha;" />
      <img src={tesla} alt="tesla" />
      <img src={kitkat} alt="kitkat" />
      <img src={boss} alt="boss" />
    </Container>
  );
};
export default Pictures;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ededed;
  mix-blend-mode: darken;
  padding: 42px 128px 42px 128px;
  margin-top: 100px;
  margin-bottom: 91px;
`;
