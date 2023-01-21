import { Button, Card } from "../../../../ui/styles";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";

const replay = () => {
  // RightDiv.location.relo
  window.location.reload();
};

const RightDiv = () => {
  return (
    <Card flexratio="4" width="100%" position="relative" mddisplay="none">
      <Card position="relative" top="-140px" right="-120px">
        <Card1 />
        <Card2 />
        <Card3 />
      </Card>
      <Button
        position="absolute"
        bottom="-350px"
        left="36%"
        padding="8px 16px"
        radius="16px"
        bg="#f5f5f5"
        color="#606060"
        display="flex"
        gap="7px"
        onClick={replay}
        size="12px"
      >
        Replay<i
            className="fa-solid fa-play"
            style={{
              marginTop:"2px",
              fontWeight: "700",
            }}
          />
      </Button>
    </Card>
  );
};

export default RightDiv;
