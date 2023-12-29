import styled from "styled-components";
import AboutMe from "./MainBlogsKomponents/AboutMe";
import Categories from "./MainBlogsKomponents/Categories";

import Posts from "./MainBlogsKomponents/Posts";
import MiniPosts from "./MainBlogsKomponents/MiniPosts";
import BlogPost from "./MainBlogsKomponents/BlogPost";
import PopularPosts from "./MainBlogsKomponents/PopularPosts";
import RecentPosts from "./MainBlogsKomponents/ResentPosts";
import GearIUse from "./MainBlogsKomponents/GearIUse";
import Products from "./MainBlogsKomponents/Products";
import GetInTouch from "./MainBlogsKomponents/GetInTouch";

import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import minipostimg1 from "../assets/minipost1.png";
import minipostimg2 from "../assets/minipost2.png";
import minipostimg3 from "../assets/minipost3.png";
import minipostimg4 from "../assets/minipost4.png";
import minipostimg5 from "../assets/minipost5.png";
import minipostimg6 from "../assets/minipost6.png";

const MainBlogs = () => {
  return (
    <Container>
      <MainBlogsContainer>
        <div>
          <AboutMe />
          <Categories />
          <PopularPosts />
          <RecentPosts />
          <GearIUse />
          <Products />
          <GetInTouch />
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
          <MininPostWrapper>
            <MiniPosts
              img={minipostimg1}
              title="Have you read The Beach by Alex?"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
            <MiniPosts
              img={minipostimg2}
              title="The writer actually live in Philippines"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
          </MininPostWrapper>
          <Posts
            img={post2}
            title="Finding Love & home in Tbilisi, Georgia"
            date="September 17, 2021 - Tips & Tricks"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra."
            location="Georgia"
            comments="Comment (52)"
          />
          <BlogPost />
          <MininPostWrapper>
            <MiniPosts
              img={minipostimg3}
              title="Get away from the maddening Crowds"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
            <MiniPosts
              img={minipostimg4}
              title="Matsumoto Castle is considered one of"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
          </MininPostWrapper>
          <MininPostWrapper>
            <MiniPosts
              img={minipostimg5}
              title="Many buildings especially in Japan"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
            <MiniPosts
              img={minipostimg6}
              title="There are roughly 1200 semiwild dear"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
          </MininPostWrapper>
          <Posts
            img={post2}
            title="Finding Love & home in Tbilisi, Georgia"
            date="September 17, 2021 - Tips & Tricks"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra."
            location="Georgia"
            comments="Comment (52)"
          />
          <MininPostWrapper>
            <MiniPosts
              img={minipostimg1}
              title="Have you read The Beach by Alex?"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
            <MiniPosts
              img={minipostimg2}
              title="The writer actually live in Philippines"
              date="September 17, 2021 - Tips & Tricks"
              location="Georgia"
              comments="Comment (52)"
            />
          </MininPostWrapper>
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
const MininPostWrapper = styled.div`
  margin-top: 55px;
  margin-bottom: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;