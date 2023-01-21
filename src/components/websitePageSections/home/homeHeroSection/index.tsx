import { Card, InnerSection, MainSection } from "../../../ui/styles";
import RightDiv from "./rightDiv/RightDiv";
import LeftDiv from "./leftDiv/LeftDiv";

const HomeHeroSection = () => {
  return (
    <>
      <MainSection width="100%" padding="0 0 100px">
        <InnerSection>
          <Card flex alignitems="center" mdflexdirection="column">
            <LeftDiv />
            <RightDiv />
          </Card>
        </InnerSection>
      </MainSection>
    </>
  );
};

export default HomeHeroSection;
