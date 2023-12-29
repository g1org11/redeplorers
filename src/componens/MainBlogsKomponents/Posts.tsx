import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

import loc from "../../assets/loc.svg";
import messege from "../../assets/messege.svg";

const Posts = ({ img, title, date, text, location, comments }) => {
  return (
    <PostsContainer>
      <img src={img} alt="post1" />
      <Date>{date} </Date>
      <Postsontent>
        <h2>{title}</h2>
        <p>{text}</p>
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
      </Postsontent>
    </PostsContainer>
  );
};
export default Posts;
const PostsContainer = styled.div`
  width: 783px;
  height: 862px;
  flex-shrink: 0;
  background-color: ${defaultTheme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const Date = styled.p`
  margin-top: 12px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 33.814px;
  padding-left: 20px;
  border-left: 3px solid ${defaultTheme.colors.orange};
`;

const Postsontent = styled.div`
  padding: 12px 10px 29px 25px;
  h2 {
    font-size: 31.637px;
    font-style: normal;
    font-weight: 600;
    line-height: 46.983px;
    margin-bottom: 10px;
  }
  p {
    width: 686px;
    height: 150px;
    flex-shrink: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 30px;
  }
`;
const PostsFooter = styled.div`
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
