import { useContext } from "react";
import { testimonialDetails } from "../../../../../data";
import { TestimonialContext } from "../../../../../helper/context";
import {
  black,
  Card,
  Image,
  Text,
  TitleText,
  white,
} from "../../../../ui/styles";

const MobileTestimonialBody = () => {
  const { isControllerClicked } = useContext(TestimonialContext);
  return (
    <>
      <Card
        width="200%"
        display="none"
        smdisplay="grid"
        smgridcolumn="1fr 1fr"
        gap="20px"
        position="absolute"
        smright={isControllerClicked ? "0" : "-100%"}
        transition="0.6s linear"
      >
        {testimonialDetails.map((testimonial, index) => (
          <Card
            key={index}
            bg="#f5f5f5"
            radius="15px"
            height="368px"
            padding="24px"
            position="relative"
            flex
            flexdirection="column"
            justifycontent="space-between"
          >
            <Card>
              <Text size="80px" italic margin="0 0 0 -15px">
                "
              </Text>
              <TitleText margin="-40px 0 0" size="24px" lineheight="30px">
                {testimonial.testimonial}
              </TitleText>
            </Card>
            <Card
              position="relative"
              flex
              alignitems="center"
              gap="25px"
            >
              <Card
                width="32px"
                height="32px"
                radius="50%"
                bg={black}
                overflow="hidden"
              >
                <Image src={testimonial.image} width="100%" />
              </Card>
              <Card
                position="absolute"
                padding="2px"
                width="20px"
                bg={white}
                radius="50%"
                smbottom="0"
                smleft="20px"
              >
                <Image src={testimonial.logo} width="100%" />
              </Card>
              <Card flex flexdirection="column">
                <Text size="18px" lineheight="28px" heavy>
                  {testimonial.name}
                </Text>
                <Text size="15px" lineheight="16px" color="#606060">
                  {testimonial.position}
                </Text>
              </Card>
            </Card>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default MobileTestimonialBody;
