import AboutUsHero from "../componens/AboutusConponents/AboutUsHero";
import About from "../componens/AboutusConponents/About";
import Blog from "../componens/AboutusConponents/Blog";
import Stories from "../componens/AboutusConponents/Stories";
import Pictures from "../componens/AboutusConponents/Pictures";
import CostumerSays from "../componens/AboutusConponents/CostumerSays";
import Costumers from "../componens/AboutusConponents/Costumers";
import AboutUsSlider from "../componens/AboutusConponents/AboutUsSlider";
import Subscribe from "../componens/Subscribe";
import Footer from "../componens/Footer";

const AboutUs = () => {
  return (
    <div>
      <AboutUsHero />
      <About />
      <Blog />
      <Stories />
      <Pictures />
      <CostumerSays />
      <Costumers />
      <AboutUsSlider />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default AboutUs;
