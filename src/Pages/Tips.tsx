import Footer from "../componens/Footer";
import TipsBlog from "../componens/TipsComponents/TipBlog";
import TipCards from "../componens/TipsComponents/TipCards";
import TipsHero from "../componens/TipsComponents/TipHero";

const Tips = () => {
  return (
    <div>
      <TipsHero />
      <TipsBlog />
      <TipCards />
      <Footer />
    </div>
  );
};
export default Tips;
