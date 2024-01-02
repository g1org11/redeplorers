import "./App.css";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyling";
import Main from "./Pages/MainPage";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Main />
    </Container>
  );
}

export default App;
const Container = styled.div`
  overflow: hidden;
  padding: 20px 70px 70px 70px;
`;
