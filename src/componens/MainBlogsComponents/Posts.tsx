import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import React from "react";

import loc from "../../assets/loc.svg";
import messege from "../../assets/messege.svg";

interface PostsProps {
  img: string;
  title: string;
  date: string;
  text: string;
  location: string;
  comments: string;
}

const Posts: React.FC<PostsProps> = ({ img, title, date, text, location, comments }) => {
  return (
    <PostsContainer>
      <img src={img} alt="post1" />
      <Date>{date} </Date>
      <Postsontent>
        <h2>{title}</h2>
        <p>{text}</p>
        <PostsFooterDiv>
          <LocMassegeDiv>
            <img src={loc} alt="loc" />
            <span>{location} </span>
          </LocMassegeDiv>
          <LocMassegeDiv>
            <img src={messege} alt="message" />
            <span>{comments}</span>
          </LocMassegeDiv>
        </PostsFooterDiv>
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
  position: relative;
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
    margin-top: 20px;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 30px;
  }
`;
const PostsFooterDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
`;

const LocMassegeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 8px;
  }
`;
