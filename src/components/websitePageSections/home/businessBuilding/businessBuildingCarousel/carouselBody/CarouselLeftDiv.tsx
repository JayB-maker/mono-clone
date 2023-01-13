import { useContext } from "react";
import { carouselDetails } from "../../../../../../data";
import { BusinessBuildingContext } from "../../../../../../helper/context";
import {
  Card,
  LinkText,
  primaryBlue,
  Text,
  TitleText,
} from "../../../../../ui/styles";

const CarouselLeftDiv = () => {
  const { carouselState } = useContext(BusinessBuildingContext);

  return (
    <>
      {carouselDetails.map(
        (detail, index) =>
          carouselState === index && (
            <Card
              key={index}
              flexratio="10"
              flex
              flexdirection="column"
              gap="20px"
            >
              <TitleText size="45px" lineheight="56.25px">
                {detail.heading}
              </TitleText>
              <Text size="18px" lineheight="24.75px" color="#606060">
                {detail.details}
              </Text>
              <Text size="18px" lineheight="24.75px" color="#606060">
                {detail.detailsContd}
              </Text>
              <LinkText
                to={detail.path}
                display="flex"
                color={primaryBlue}
                margin="15px 0 0"
                gap="5px"
                hgap="7px"
                alignitems="center"
              >
                <Text heavy size="18px">
                  {detail.handle}
                </Text>{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </LinkText>
            </Card>
          )
      )}
    </>
  );
};

export default CarouselLeftDiv;
