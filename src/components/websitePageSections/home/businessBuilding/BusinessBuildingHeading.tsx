import { Card, Text, TitleText } from "../../../ui/styles";

const BusinessBuildingHeading = () => {
  return (
    <Card flex>
      <Card
        flex
        flexdirection="column"
        gap="30px"
        flexratio="1"
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
          Business building with Mono
        </TitleText>
        <Text
          size="26px"
          lineheight="35.75px"
          mdsize="20px"
          smsize="16px"
          mdlineheight="28px"
          smlineheight="22px"
        >
          Here are some of the interesting features and experiences powered by
          Mono.
        </Text>
      </Card>
      <Card flexratio="1" mddisplay="none" />
    </Card>
  );
};

export default BusinessBuildingHeading;
