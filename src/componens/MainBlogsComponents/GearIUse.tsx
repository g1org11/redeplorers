import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import React from "react";

const GearIUse = () => {
  return (
    <GearContainer>
      <h2>Gear I Use</h2>
      <h3>What’s in My Bag??</h3>
      <p>Unfortunately, there is no “one-size-fits-all” when it comes to travel packing lists.</p>
      <button>View Details</button>
    </GearContainer>
  );
};

export default GearIUse;

const GearContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;

  flex-shrink: 0;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h2 {
    margin-top: 13px;
    margin-bottom: 37px;
    font-size: 29.649px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.392px;
  }
  h3 {
    font-size: 29.649px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.392px;
    margin-bottom: 26px;
  }
  p {
    text-align: center;
    width: 345px;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 33.814px;
    color: #0b0a0a;
    margin-bottom: 16px;
  }
  button {
    padding: 25px 40px;
    background-color: ${defaultTheme.colors.blue};
    color: ${defaultTheme.colors.white};
    border: 0;
    border-radius: 8px;
    margin-bottom: 17px;
  }
`;
