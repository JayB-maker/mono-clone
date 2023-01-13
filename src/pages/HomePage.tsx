import Layout from "../components/ui/layout";
import BusinessBuilding from "../components/websitePageSections/home/businessBuilding";
import DigitalFinance from "../components/websitePageSections/home/digitalFinance";
import GetStarted from "../components/websitePageSections/home/getStarted";
import HomeHeroSection from "../components/websitePageSections/home/homeHeroSection";
import Testimonials from "../components/websitePageSections/home/testimonials";
import TrustedBy from "../components/websitePageSections/home/trustedBy";

const HomePage = () => {
  return (
    <Layout>
      <HomeHeroSection />
      <TrustedBy />
      <DigitalFinance />
      <BusinessBuilding />
      <Testimonials />
      <GetStarted />
    </Layout>
  );
};

export default HomePage;
