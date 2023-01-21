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

const TestimonialBody = () => {
  const { isControllerClicked } = useContext(TestimonialContext);
  return (
    <Card height="800px" overflow="hidden" position="relative">
      <Card
        width="200%"
        flex
        gap="20px"
        mddisplay="grid"
        mdgridcolumn="1fr 1fr"
        position="absolute"
        right={isControllerClicked ? "0" : "-100%"}
        transition="0.7s linear"
      >
        {testimonialDetails.map((testimonial, index) => (
          <Card
            key={index}
            flexratio="1"
            bg="#f5f5f5"
            radius="15px"
            height="800px"
            padding="60px"
            smpadding="24px"
            position="relative"
          >
            <Text size="120px" italic margin="0 0 0 -20px">
              "
            </Text>
            <TitleText size="45px" lineheight="56.25px" margin="-80px 0 0" smsize="24px" smlineheight="30px">
              {testimonial.testimonial}
            </TitleText>
            <Card
              position="absolute"
              bottom="60px"
              left="60px"
              flex
              alignitems="center"
              gap="25px"
            >
              <Card
                width="50px"
                height="50px"
                radius="50%"
                bg={black}
                overflow="hidden"
              >
                <Image src={testimonial.image} width="100%" />
              </Card>
              <Card
                position="absolute"
                padding="4px"
                width="24px"
                bg={white}
                radius="50%"
                bottom="0"
                left="40px"
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
    </Card>
  );
};

export default TestimonialBody;
