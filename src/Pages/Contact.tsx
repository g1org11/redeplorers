import AboutUsSlider from "../componens/AboutusConponents/AboutUsSlider";
import ContactForms from "../componens/ContactComponents/ContactForms";
import ContactHero from "../componens/ContactComponents/Contacthero";
import Footer from "../componens/Footer";
import Subscribe from "../componens/Subscribe";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForms />
      <AboutUsSlider />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Contact;
