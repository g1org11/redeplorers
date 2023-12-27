import "./App.css";
import styled from "styled-components";
import Header from "./componens/Header";
import GlobalStyles from "./GlobalStyling";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
    </Container>
  );
}

export default App;
const Container = styled.div`
  overflow: hidden;
  padding: 20px 70px 70px 70px;
`;
