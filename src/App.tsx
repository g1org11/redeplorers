import "./App.css";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyling";
import Header from "./componens/Header";
import AboutUs from "./Pages/AboutUs";
import Destination from "./Pages/Destination";
import Tips from "./Pages/Tips";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
  padding: 20px 70px 70px 70px;
`;
