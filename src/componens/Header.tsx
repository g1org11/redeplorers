import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Tips</a>
          </li>
          <li>
            <a href="">Contact</a>
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
