import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import loc from "../../assets/loc.svg";
import messege from "../../assets/messege.svg";
// interface DestinationcardsProps {
//   img: string;
//   title: string;
//   date: string;
//   location: string;
//   comments: string;
// }

const Destinationcards = ({ img, title, date, location, comments }) => {
  return (
    <MiniPostContainers>
      <img src={img} alt="post1" />
      <Wrapper>
        <Date>{date} </Date>
        <PostsContent>
          <h2>{title}</h2>

          <PostsFooter>
            <LocMassegeDiv>
              <img src={loc} alt="loc" />
              <span>{location} </span>
            </LocMassegeDiv>
            <LocMassegeDiv>
              <img src={messege} alt="message" />
              <span>{comments}</span>
            </LocMassegeDiv>
          </PostsFooter>
        </PostsContent>
      </Wrapper>
    </MiniPostContainers>
  );
};
export default Destinationcards;
const MiniPostContainers = styled.div`
  width: 377.637px;
  height: 636.873px;
  flex-shrink: 0;
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  bottom: 70px;
  width: 349.099px;
  height: 285px;
  padding-top: 45px;
  background-color: ${defaultTheme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const Date = styled.p`
  /* margin-top: 12px; */

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 20px;
  border-left: 3px solid ${defaultTheme.colors.orange};
  color: ${defaultTheme.colors.orange};
`;
const PostsContent = styled.div`
  padding: 0 37px 22px 22px;
  h2 {
    width: 220px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 25px;
    margin-top: 25px;
  }
`;
const PostsFooter = styled.div`
  position: absolute;
  width: 85%;
  bottom: 25px;
  padding-top: 33px;
  border-top: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LocMassegeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 8px;
  }
`;
