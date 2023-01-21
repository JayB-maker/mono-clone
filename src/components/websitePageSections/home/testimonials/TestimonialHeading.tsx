import { Card, Text, TitleText } from "../../../ui/styles";

const TestimonialHeading = () => {
  return (
    <Card flex>
      <Card
        flex
        flexdirection="column"
        gap="30px"
        flexratio="3"
        mdwidth="576px"
        smwidth="100%"
      >
        <TitleText
          size="64px"
          lineheight="73.6px"
          mdsize="48px"
          smsize="30px"
          mdlineheight="56px"
          smlineheight="35px"
        >
          Why market leaders are choosing Mono
        </TitleText>
        <Text
          size="26px"
          lineheight="35.75px"
          mdsize="20px"
          smsize="16px"
          mdlineheight="28px"
          smlineheight="22px"
        >
          Here's what some of them are saying.
        </Text>
      </Card>
      <Card flexratio="2" mddisplay="none" />
    </Card>
  );
};

export default TestimonialHeading;
