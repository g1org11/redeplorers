import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import loc from "../../assets/loc.svg";
import messege from "../../assets/messege.svg";

const MiniPosts = ({ img, title, date, location, comments }) => {
  return (
    <MiniPostContainers>
      <img src={img} alt="post1" />
      <Date>{date} </Date>
      <Postsontent>
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
      </Postsontent>
    </MiniPostContainers>
  );
};
export default MiniPosts;
const MiniPostContainers = styled.div`
  width: 377.637px;
  height: 636.873px;
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
  padding: 12px 18px 17px 15px;
  h2 {
    font-size: 31.637px;
    font-style: normal;
    font-weight: 600;
    line-height: 46.983px;
    margin-bottom: 100px;
    margin-top: 72px;
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
