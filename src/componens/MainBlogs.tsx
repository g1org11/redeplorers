import styled from "styled-components";
import AboutMe from "./MainBlogsKomponents/AboutMe";
import Categories from "./MainBlogsKomponents/Categories";

import Posts from "./MainBlogsKomponents/Posts";

import post1 from "../assets/post1.png";

const MainBlogs = () => {
  return (
    <Container>
      <MainBlogsContainer>
        <div>
          <AboutMe />
          <Categories />
        </div>
        <div>
          <Posts
            img={post1}
            title="A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore"
            date="July, 15, 2021 - Tips and Tricks"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra."
            location="Penang, Malaysia"
            comments="Comment (52)"
          />
        </div>
      </MainBlogsContainer>
    </Container>
  );
};
export default MainBlogs;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainBlogsContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  column-gap: 80px;
  margin-top: 600px;
  justify-content: center;
`;
