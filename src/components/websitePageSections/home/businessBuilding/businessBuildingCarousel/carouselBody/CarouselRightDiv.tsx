import React, { useContext } from "react";
import { carouselDetails } from "../../../../../../data";
import { BusinessBuildingContext } from "../../../../../../helper/context";
import { Card, Image, white } from "../../../../../ui/styles";

const CarouselRightDiv = () => {
  const { carouselState } = useContext(BusinessBuildingContext);
  return (
    <Card flexratio="9" position="relative">
      {carouselDetails.map(
        (detail, index) =>
          carouselState === index && (
            <>
              <Image src={detail.image} smwidth="100%" />
              <Card
                position="absolute"
                padding="35px" smpadding="20px"
                radius="50%"
                bg={white}
                right="20px"
                top="-50px"
                smtop="-30px"
                smright="-20px"
              >
                <Image src={detail.icon} width="50px" smwidth="40px" />
              </Card>
            </>
          )
      )}
    </Card>
  );
};

export default CarouselRightDiv;
