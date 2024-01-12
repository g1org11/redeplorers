// import Header from "../componens/Header";
import Hero from "../componens/Hero";
import MainBlogs from "../componens/MainBlogs";
import Slider from "../componens/MainBlogsComponents/Slider";
import Subscribe from "../componens/Subscribe";
import Footer from "../componens/Footer";
import React from "react";

const MainPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <MainBlogs />
      <Slider />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default MainPage;
