import { Card, Text, TitleText } from "../../../ui/styles";

const TestimonialHeading = () => {
  return (
    <Card flex>
      <Card flex flexdirection="column" gap="30px" flexratio="3">
        <TitleText size="64px" lineheight="73.6px">
          Why market leaders are choosing Mono
        </TitleText>
        <Text size="26px" lineheight="35.75px">
          Here's what some of them are saying.
        </Text>
      </Card>
      <Card flexratio="2" />
    </Card>
  );
};

export default TestimonialHeading;
