import { useState } from "react";
import { TestimonialContext } from "../../../../helper/context";
import { Card, InnerSection, MainSection } from "../../../ui/styles";
import TestimonialBody from "./testimonialBody/TestimonialBody";
import TestimonialController from "./TestimonialController";
import TestimonialHeading from "./TestimonialHeading";

const Testimonials = () => {
    const [isControllerClicked, setIsControllerClicked] = useState(false);
  return (
    <MainSection width="100%">
      <InnerSection>
        <TestimonialContext.Provider
          value={{ isControllerClicked, setIsControllerClicked }}
        >
          <Card
            padding="50px 0 100px"
            flex
            flexdirection="column"
            gap="85px"
            smgap="50px"
          >
            <TestimonialHeading />
            <TestimonialBody />
            <TestimonialController />
          </Card>
        </TestimonialContext.Provider>
      </InnerSection>
    </MainSection>
  );
};

export default Testimonials;
