import styled from "styled-components";
import logo from "../assets/Logo.svg";
import { defaultTheme } from "../defaultTheme";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <Ul>
            <li>Body</li>
            <li>Travel</li>
            <li>Account</li>
          </Ul>
        </div>
      </FooterWrapper>
      <InfoWrapper>
        <Info>
          <p>
            We are location independent bloggers, digital influencers, small group tour organizers
            and world travelers with a serious passion for the sun, the sea and adventure.
          </p>
          <p>Eight years and 60-something countries later and we are still on the road.</p>
        </Info>

        <Informations>
          <div>
            <BodyDiv>
              <Address>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</Address>
              <li>T: +234 706 507 8544</li>
              <li>E: info@redexplorers.com</li>
              <li>W: www. redexplorers.com</li>
            </BodyDiv>
          </div>
          <Travel>
            <BodyDiv>
              <li>My List</li>
              <li>My Requests</li>
              <li>My Credits</li>
              <li>My Info</li>
              <li>Contact</li>
            </BodyDiv>
          </Travel>
          <Account>
            <BodyDiv>
              <li>Travel</li>
              <li>Why Travel</li>
              <li>Become a Traveler</li>
              <li>How Its Works</li>
              <li>Traveling FAQs</li>
            </BodyDiv>
          </Account>
        </Informations>
      </InfoWrapper>
    </div>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #c4c4c4;
  padding: 0 177px;
  padding-top: 55px;
  margin-bottom: 18px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 200px;
  li {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0;

  background: rgba(0, 0, 0, 0.68);
  padding: 40px 120px 100px 177px;

  p {
    color: #eee;
    font-family: ${defaultTheme.fonts.secondary};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  li {
    color: #eee;
    font-family: ${defaultTheme.fonts.secondary};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    list-style-type: none;
  }
`;

const Info = styled.div`
  width: 337px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 65px;
`;

const BodyDiv = styled.ul`
  display: flex;

  flex-direction: column;
  gap: 22px;
`;
const Address = styled.li`
  width: 153px;
`;
const Informations = styled.div`
  display: flex;
  margin-right: 60px;
`;
const Account = styled.div`
  margin-left: 150px;
`;
const Travel = styled.div`
  margin-left: 50px;
`;
