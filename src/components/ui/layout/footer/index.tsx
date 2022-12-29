import { black, Card, InnerSection, MainSection } from "../../styles";
import Copyright from "./Copyright";
import StartBuilding from "./StartBuilding";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <MainSection
      padding="120px 0 50px"
      mdpadding="50px 0 100px"
      smpadding="30px 0 150px"
      // bg="#0E0E0E"
    >
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          width="100%"
          gap="172px"
          mdgap="100px"
          smgap="50px"
        >
          <StartBuilding />
          <MainFooter />
          <Copyright />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Footer;
