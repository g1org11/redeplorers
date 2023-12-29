import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

import post3 from "../../assets/post3.png";

const BlogPost = () => {
  return (
    <BlogPostContainer>
      <img src={post3} alt="post3" />
      <Content>
        <h2>
          Want <span>Me to Purchase </span> Something ForYou That isn’t available in your Country?
        </h2>
      </Content>{" "}
      <Button>Place Order</Button>
    </BlogPostContainer>
  );
};

export default BlogPost;
const BlogPostContainer = styled.div`
  margin-top: 53px;
  position: relative;
  img {
    width: 100%; /* Ensure the image takes the full width of the container */
    height: auto; /* Maintain the aspect ratio of the image */
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 20px;

  h2 {
    text-align: center;
    color: ${defaultTheme.colors.white};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 46.983px;
    span {
      color: ${defaultTheme.colors.orange};
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 46.983px;
      text-decoration-line: underline;
    }
  }
`;
const Button = styled.button`
  all: unset;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 27px 50px;
  border-radius: 8px;
  color: ${defaultTheme.colors.white};
  background-color: ${defaultTheme.colors.blue};
  position: absolute;
  bottom: 50px; /* Adjust the bottom value as needed */
  left: 37%;
`;
