import { useContext } from "react";
import { carouselDetails } from "../../../../../data";
import { BusinessBuildingContext } from "../../../../../helper/context";
import { black, Card, Text, white } from "../../../../ui/styles";

const CarouselNavigation = () => {
  const { carouselState, setCarouselState } = useContext(
    BusinessBuildingContext
  );
  const handleNavClicked = (index: any) => {
    if (carouselState === index) {
      setCarouselState(0);
    }
    setCarouselState(index);
  };
  return (
    <Card width="100%" smwidth="100%" smoverflow="scroll">
      <Card flex gap="10px" alignitems="center">
        {carouselDetails.map((nav, index) => (
          <Card
            key={index}
            padding="13px 20px"
            smpadding="10px 14px"
            radius="9999px"
            bg={carouselState === index ? black : "transparent"}
            pointer
            onClick={() => handleNavClicked(index)}
          >
            <Text
              size="18px"
              mdsize="30px"
              smsize="15px"
              smlineheight="19px"
              nowrap
              color={carouselState === index ? white : black}
            >
              {nav.nav}
            </Text>
          </Card>
        ))}
      </Card>
    </Card>
  );
};

export default CarouselNavigation;
