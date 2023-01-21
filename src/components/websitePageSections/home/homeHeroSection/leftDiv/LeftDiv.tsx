import {
  black,
  Button,
  Card,
  primaryBlue,
  Text,
  TitleText,
  white,
} from "../../../../ui/styles";

const LeftDiv = () => {
  return (
    <Card flex flexdirection="column" gap="30px" smgap="20px" flexratio="5">
      <Card
        radius="9999px"
        flex
        bg="#f5f5f5"
        alignitems="center"
        padding="9px 10px"
        gap="10px"
        width="fit-content"
      >
        <Card
          bg={primaryBlue}
          radius="24px"
          padding="4px 12px"
          flex
          alignitems="center"
          justifycontent="center"
        >
          <Text size="11px" heavy color={white}>
            New
          </Text>
        </Card>
        <Text size="13px" color={black} heavy>
          Mono is live in Kenya!
        </Text>
      </Card>
      <TitleText
        size="92px"
        margin="20px 0 0"
        lineheight="92px"
        mdsize="66px"
        smsize="36px"
        mdlineheight="76px"
        smlineheight="41px"
        mdwidth="500px"
        smwidth="100%"
        weight="500"
      >
        Reliably access bank account
      </TitleText>
      <Text
        size="26px"
        lineheight="40px"
        mdsize="20px"
        smsize="16px"
        mdlineheight="28px"
        smlineheight="22px"
      >
        Mono helps businesses to access high-quality financial data and direct
        bank payments.
      </Text>
      <Card flex gap="15px">
        <Button
          flex
          alignitems="center"
          size="15px"
          gap="8px"
          padding="15px 20px"
          bg={primaryBlue}
          color={white}
        >
          Get started for free
        </Button>
        <Button
          flex
          alignitems="center"
          size="15px"
          gap="8px"
          padding="15px 20px"
          bg="#f5f5f5"
          color={black}
        >
          Contact Sales
        </Button>
      </Card>
    </Card>
  );
};

export default LeftDiv;
