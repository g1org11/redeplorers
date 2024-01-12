import card1 from "../../assets/tips/card1.png";
import card2 from "../../assets/tips/card2.png";
import card3 from "../../assets/tips/card3.png";
import card4 from "../../assets/tips/card4.png";
import card5 from "../../assets/tips/card5.png";
import card6 from "../../assets/tips/card6.png";
import card7 from "../../assets/tips/card7.png";
import card8 from "../../assets/tips/card8.png";
import card9 from "../../assets/tips/card9.png";

import Card from "./Card";
import styled from "styled-components";
import React from "react";

const TipCards = () => {
  return (
    <CardWrapper>
      <Card img={card1} title={"Going to the Extreme -The Northern Pole"} />
      <Card img={card2} title={"Summer Vibes... Where to spend the energy."} />
      <Card img={card3} title={"Smartet cites and how to enjoy them."} />
      <Card img={card4} title={"Going to the wild? What should you pack?"} />
      <Card img={card5} title={"Foods to try when you Visit Australia."} />
      <Card img={card6} title={"Beaches And how to enjoy them the most."} />
      <Card img={card7} title={"Road Trip 101 Things you need to know"} />
      <Card img={card8} title={"Water front precautions to take during travels."} />
      <Card img={card9} title={"Going to the Extreme-The Northern Pole"} />
    </CardWrapper>
  );
};

export default TipCards;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  row-gap: 70px;
  margin-bottom: 95px;
`;
