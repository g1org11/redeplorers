import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import card1 from "../../assets/destination/card1.png";
import card2 from "../../assets/destination/card2.png";
import card3 from "../../assets/destination/card3.png";
import card4 from "../../assets/destination/card4.png";
import card5 from "../../assets/destination/card5.png";
import card6 from "../../assets/destination/card6.png";
import card7 from "../../assets/destination/card7.png";
import card8 from "../../assets/destination/card8.png";
import card9 from "../../assets/destination/card9.png";
import Destinationcards from "./DestinationCards";
import { useState } from "react";
import React from "react";

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState("Europe");

  const handleHeaderClick = (region) => {
    setActiveRegion(region);
  };
  const regionCards = {
    Europe: [
      {
        img: card1,
        date: "September 16, 2018 - Tips & Tricks",
        title: "Finding Love & Home In Tbilisi, Georgia",
        location: "Georgia",
        comments: "Comment (25)",
      },
      {
        img: card2,
        date: "September 16, 2018 - Tips & Tricks",
        title: "Have you read the Beach by Alex?",
        location: "Georgia",
        comments: "Comment (15)",
      },
      {
        img: card3,
        date: "September 16, 2018 - Tips & Tricks",
        title: "The writer actually live in Philippines",
        location: "Georgia",
        comments: "Comment (15)",
      },
      {
        img: card4,
        date: "September 19, 2018 - Tips & Tricks",
        title: "Honestly it’s almost ridiculous how",
        location: "Brazil",
        comments: "Comment (52)",
      },
      {
        img: card5,
        date: "September 20, 2018 - Tips & Tricks",
        title: "The only way to see the islands",
        location: "India",
        comments: "Comment (25)",
      },
      {
        img: card6,
        date: "September 29, 2018 - Tips & Tricks",
        title: "Get away from the maddening crowds",
        location: "Brazil",
        comments: "Comment (22)",
      },
      {
        img: card7,
        date: "September 14, 2018 - Tips & Tricks",
        title: "Matsumoto castle is considered one of",
        location: "India",
        comments: "Comment (22)",
      },
      {
        img: card8,
        date: "September 15, 2018 - Tips & Tricks",
        title: "Many buildings especially in Japan",
        location: "China",
        comments: "Comment (27)",
      },

      {
        img: card9,
        date: "September 11, 2018 - Tips & Tricks",
        title: "There are roughly 1200 semiwild deer",
        location: "Canada",
        comments: "Comment (55)",
      },
      // Add more cards for Europe
    ],
    SouthAmerica: [
      {
        img: card6,
        date: "September 29, 2018 - Tips & Tricks",
        title: "Get away from the maddening crowds",
        location: "Brazil",
        comments: "Comment (22)",
      },
      {
        img: card9,
        date: "September 11, 2018 - Tips & Tricks",
        title: "There are roughly 1200 semiwild deer",
        location: "Brazil",
        comments: "Comment (55)",
      },
      {
        img: card4,
        date: "September 19, 2018 - Tips & Tricks",
        title: "Honestly it’s almost ridiculous how",
        location: "Brazil",
        comments: "Comment (52)",
      },
      // Add more cards for South America
    ],
    NorthAmerica: [
      {
        img: card3,
        date: "September 16, 2018 - Tips & Tricks",
        title: "The writer actually live in Philippines",
        location: "USA",
        comments: "Comment (15)",
      },
      {
        img: card2,
        date: "September 16, 2018 - Tips & Tricks",
        title: "Have you read the Beach by Alex?",
        location: "Canada",
        comments: "Comment (15)",
      },
      {
        img: card9,
        date: "September 11, 2018 - Tips & Tricks",
        title: "There are roughly 1200 semiwild deer",
        location: "Canada",
        comments: "Comment (55)",
      },
      // Add more cards for North America
    ],
    Asia: [
      {
        img: card8,
        date: "September 15, 2018 - Tips & Tricks",
        title: "Many buildings especially in Japan",
        location: "China",
        comments: "Comment (27)",
      },
      {
        img: card7,
        date: "September 14, 2018 - Tips & Tricks",
        title: "Matsumoto castle is considered one of",
        location: "India",
        comments: "Comment (22)",
      },
      {
        img: card5,
        date: "September 20, 2018 - Tips & Tricks",
        title: "The only way to see the islands",
        location: "India",
        comments: "Comment (25)",
      },
      // Add more cards for Asia
    ],
    Africa: [
      {
        img: card2,
        date: "September 16, 2018 - Tips & Tricks",
        title: "Have you read the Beach by Alex?",
        location: "Ghana",
        comments: "Comment (15)",
      },
      {
        img: card9,
        date: "September 11, 2018 - Tips & Tricks",
        title: "There are roughly 1200 semiwild deer",
        location: "Nigeria",
        comments: "Comment (55)",
      },
      {
        img: card5,
        date: "September 20, 2018 - Tips & Tricks",
        title: "The only way to see the islands",
        location: "Nigeria",
        comments: "Comment (25)",
      },
      // Add more cards for Africa
    ],
  };
  const getCardsForRegion = () => {
    return regionCards[activeRegion] || [];
  };

  return (
    <DestinationContainer>
      <DestinationHeader>
        {["SouthAmerica", "NorthAmerica", "Europe", "Africa", "Asia"].map((region, index) => (
          <HeaderItem
            key={index}
            active={activeRegion === region}
            onClick={() => handleHeaderClick(region)}
          >
            {region}
          </HeaderItem>
        ))}
      </DestinationHeader>
      <CardsContainer>
        {getCardsForRegion().map((card, index) => (
          <Destinationcards
            key={index}
            img={card.img}
            date={card.date}
            title={card.title}
            location={card.location}
            comments={card.comments}
          />
        ))}
      </CardsContainer>
    </DestinationContainer>
  );
};

export default Destinations;

const DestinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardsContainer = styled.div`
  margin-top: 104px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 87px;
  /* row-gap: 33px; */
`;

const DestinationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderItem = styled.p<HeaderItemProps>`
  width: 300px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 2px solid #c4c4c4;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
    background-color:${defaultTheme.colors.blue};
    color: white;
  `}
`;
