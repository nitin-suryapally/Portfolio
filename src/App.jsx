import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import FeatureCard from "./sections/FeatureCard";
import Heroo from "./sections/Heroo";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonial from "./sections/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Heroo />
      <ShowcaseSection />
      <FeatureCard />
      {/* <ExperienceSection /> */}
      <TechStack />
      <LogoSection />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
