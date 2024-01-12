import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import React from "react";

const Categories = () => {
  return (
    <CategoriesWRapper>
      <h2>Categories</h2>
      <div>
        <Lists>
          <p>Europe</p>
          <p>(11)</p>
        </Lists>
        <Lists>
          <p>Mountains</p>
          <p>(11)</p>
        </Lists>
        <Lists>
          <p>Traveling Video</p>
          <p>(11)</p>
        </Lists>
        <Lists>
          <p>Beauty of Seas</p>
          <p>(11)</p>
        </Lists>
        <Lists>
          <p>Cuisine</p>
          <p>(11)</p>
        </Lists>
        <Lists>
          <p>Guides for traveler</p>
          <p>(11)</p>
        </Lists>
        <Lists>
          <p>Guides for traveler</p>
          <p>(11)</p>
        </Lists>
      </div>
    </CategoriesWRapper>
  );
};

export default Categories;

const CategoriesWRapper = styled.div`
  width: 450.231px;
  padding: 16px 32px 50px 44px;
  margin-top: 43px;
  background-color: ${defaultTheme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h2 {
    text-align: center;
    margin-bottom: 68px;
    font-size: 29.649px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.392px; /* 173.333% */
  }
`;
const Lists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
`;
