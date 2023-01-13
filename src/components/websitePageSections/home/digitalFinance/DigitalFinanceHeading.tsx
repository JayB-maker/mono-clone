import React from "react";
import { Card, Text, TitleText } from "../../../ui/styles";

const DigitalFinanceHeading = () => {
  return (
    <Card flex>
      <Card flex flexdirection="column" gap="30px" flexratio="1">
        <TitleText size="64px" lineheight="73.6px">
          Build for the future of digital finance.
        </TitleText>
        <Text size="26px" lineheight="35.75px">
          Bring tomorrow's solutions to life, with our customer-focused
          solutions, today.
        </Text>
      </Card>
      <Card flexratio="1" />
    </Card>
  );
};

export default DigitalFinanceHeading;
