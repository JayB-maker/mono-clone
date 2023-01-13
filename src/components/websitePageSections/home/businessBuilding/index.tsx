import { useState } from "react";
import { BusinessBuildingContext } from "../../../../helper/context";
import { Card, InnerSection, MainSection } from "../../../ui/styles";
import BusinessBuildingCarousel from "./businessBuildingCarousel/BusinessBuildingCarousel";
import BusinessBuildingHeading from "./BusinessBuildingHeading";

const BusinessBuilding = () => {
  const [carouselState, setCarouselState] = useState(0);
  return (
    <MainSection width="100%">
      <InnerSection>
        <BusinessBuildingContext.Provider
          value={{ carouselState, setCarouselState }}
        >
          <Card padding="50px 0 100px" flex flexdirection="column" gap="80px">
            <BusinessBuildingHeading />
            <BusinessBuildingCarousel />
          </Card>
        </BusinessBuildingContext.Provider>
      </InnerSection>
    </MainSection>
  );
};

export default BusinessBuilding;
