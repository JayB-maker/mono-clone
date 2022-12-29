import { Card } from "../../../../ui/styles";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";

const RightDiv = () => {
  return (
    <Card flexratio="4" width="100%" position="relative">
      <Card position="relative" top="-140px" right="-120px">
        <Card1 />
        <Card2 />
        <Card3 />
      </Card>
    </Card>
  );
};

export default RightDiv;
