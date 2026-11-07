import ServicesHero from "../components/Services/ServicesHero";
import ServicesOverview from "../components/Services/ServicesOverview";
import MedicalSpecialties from "../components/Services/MedicalSpecialties";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import HowItWorks from "../components/Services/HowItWorks";
import ServicesFAQ from "../components/Services/ServicesFAQ";
import ServicesCTA from "../components/Services/ServicesCTA";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <MedicalSpecialties />
      <WhyChooseUs />
      <HowItWorks />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
};

export default Services;