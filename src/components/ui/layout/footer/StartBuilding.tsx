import {
  Button,
  Card,
  primaryBlue,
  Text,
  TitleText,
  white,
} from "../../styles";

const StartBuilding = () => {
  return (
    <Card
      flex
      flexdirection="column"
      width="672px"
      smwidth="100%"
      gap="15px"
      alignitems="center"
      margin="0 auto"
    >
      <TitleText
        size="64px"
        lineheight="73.6px"
        color={white}
        mdsize="48px"
        mdlineheight="55px"
        smsize="30px"
        smlineheight="35px"
        center
      >
        Start building with Mono
      </TitleText>
      <Text
        size="26px"
        lineheight="35.7px"
        color={white}
        center
        mdsize="20px"
        mdlineheight="28px"
        smsize="16px"
        smlineheight="22px"
      >
        Access high-quality financial data and start processing payments
        directly from bank accounts in minutes.
      </Text>
      <Card flex gap="15px" margin="35px 0 0">
        <Button
          size="15px"
          lineheight="20px"
          bg={primaryBlue}
          color={white}
          padding="15px 20px"
        >
          Start now for free
        </Button>
        <Button
          size="15px"
          lineheight="20px"
          bg="#202020"
          color={white}
          padding="15px 20px"
        >
          Talk to sales
        </Button>
      </Card>
    </Card>
  );
};

export default StartBuilding;
