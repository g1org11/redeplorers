import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/tips">Tips</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Ul>
      </div>
    </HeaderContainer>
  );
};
export default Header;
const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  z-index: 2;
  li {
    list-style-type: none;
  }
  a {
    color: ${defaultTheme.colors.orange};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    text-decoration: none;
    padding: 2px 40px 12px 40px;

    &:hover {
      color: ${defaultTheme.colors.white};
      background-color: ${defaultTheme.colors.blue};
      border-radius: 8px;
    }
  }
`;
