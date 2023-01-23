import { black, Card, Divider, InnerSection, MainSection } from "../../styles";
import Copyright from "./Copyright";
import StartBuilding from "./StartBuilding";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <MainSection
      padding="120px 0 100px"
      mdpadding="50px 0 100px"
      smpadding="150px 0 50px"
      bg={black}
    >
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          width="100%"
          gap="80px"
          smgap="50px"
        >
          <StartBuilding />
          <Divider />
          <MainFooter />
          <Divider />
          <Copyright />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Footer;
