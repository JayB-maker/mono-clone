import { Card, InnerSection, MainSection } from "../../../ui/styles";
import RightDiv from "./rightDiv/RightDiv";
import LeftDiv from "./leftDiv/LeftDiv";

const HomeHeroSection = () => {
  return (
    <>
      <MainSection width="100%">
        <InnerSection>
          <Card flex alignitems="center">
            <LeftDiv />
            <RightDiv />
          </Card>
        </InnerSection>
      </MainSection>
    </>
  );
};

export default HomeHeroSection;
