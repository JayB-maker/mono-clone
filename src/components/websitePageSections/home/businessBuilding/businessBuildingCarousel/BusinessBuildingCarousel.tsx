import { Card } from "../../../../ui/styles";
import CarouselBody from "./carouselBody/CarouselBody";
import CarouselNavigation from "./CarouselNavigation";

const BusinessBuildingCarousel = () => {
  return (
    <Card
      padding="60px 60px 0"
      radius="15px"
      bg="#f5f5f5"
      flex
      flexdirection="column"
      gap="80px"
    >
        <CarouselNavigation />
        <CarouselBody />
    </Card>
  );
};

export default BusinessBuildingCarousel;
