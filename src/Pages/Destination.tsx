import DestinationHero from "../componens/DestinationComponents/DestinationHero";
import DestinationBlog from "../componens/DestinationComponents/DestinationBlog";
import Destinations from "../componens/DestinationComponents/Destinations";
import Footer from "../componens/Footer";
import SimpleSlider from "../componens/MainBlogsComponents/Slider";
import Subscribe from "../componens/Subscribe";
import React from "react";

const Destination = () => {
  return (
    <div>
      <DestinationHero />
      <DestinationBlog />
      <Destinations />
      <SimpleSlider />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Destination;
