import { Card, Text, TitleText } from "../../../ui/styles";

const BusinessBuildingHeading = () => {
  return (
    <Card flex>
      <Card flex flexdirection="column" gap="30px" flexratio="1">
        <TitleText size="64px" lineheight="73.6px">
          Business building with Mono
        </TitleText>
        <Text size="26px" lineheight="35.75px">
          Here are some of the interesting features and experiences powered by
          Mono.
        </Text>
      </Card>
      <Card flexratio="1" />
    </Card>
  );
};

export default BusinessBuildingHeading;
