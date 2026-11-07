import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesPreview from "../components/ServicesPreview";
import AboutPreview from "../components/AboutPreview";
import Doctors from "../components/Doctors";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <main>
      <Hero />

      <WhyChooseUs />

      <ServicesPreview />

      <AboutPreview />

      <Doctors />

      <HowItWorks />

      <Testimonials />

      <FAQ />

      <CTA />
    </main>
  );
};

export default Home;