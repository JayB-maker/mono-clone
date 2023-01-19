import {
  Button,
  Card,
  Image,
  Text,
  TitleText,
  white,
} from "../../../../ui/styles";

const DigitalCardDetails = [
  {
    image:
      "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782070/Mono-clone/directpay_1_f62snf.jpg",
    icon: "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782074/Mono-clone/vector-1get-started-icon_rfaita.svg",
    heading: "DirectPay",
    details:
      "Collect bank payments in your web or mobile app. No cards. No chargebacks",
    color: "black",
    buttonDetails: "Start with DirectPay",
    buttonbg: "#0055ba",
    buttonWidth: "206px",
    extraDetails:
      "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782077/Mono-clone/image_xqfk3t.svg",
  },
  {
    image:
      "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782154/Mono-clone/percept_h1lcwo.png",
    icon: "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782155/Mono-clone/union_p8jrjn.svg",
    heading: "Percept",
    details:
      "Money operations and reconciliation for all your corporate accounts, in one dashboard",
    color: "white",
    buttonDetails: "Request access",
    buttonbg: "#202020",
    buttonWidth: "176px",
    extraDetails:
      "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782077/Mono-clone/image_xqfk3t.svg",
  },
];

const DigitalFinanceCards = () => {
  return (
    <Card flex flexdirection="column" gap="20px">
      <Card
        height="473px"
        width="100%"
        bgimage='url("https://res.cloudinary.com/dsx94d7pa/image/upload/v1671781990/Mono-clone/connect_snvzjh.jpg")'
        bgsize="cover"
        bgposition="bottom"
        radius="15px"
        flex
        flexdirection="column"
        gap="20px"
        padding="80px 60px"
        smpadding="40px 24px 200px"
      >
        <Image
          src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782068/Mono-clone/vector-6_1_qauay2.svg"
          alt="connect"
          width="40px"
        />
        <TitleText
          size="45px"
          lineheight="56.25px"
          color={white}
          mdsize="30px"
          smsize="24px"
          mdlineheight="38px"
          smlineheight="30px"
        >
          Connect
        </TitleText>
        <Text
          size="18px"
          lineheight="24px"
          color={white}
          width="370px"
          mdwidth="370px"
          smwidth="100%"
          mdsize="16px"
          smsize="15px"
          mdlineheight="22px"
          smlineheight="21px"
        >
          Securely access financial accounts for statements, transactions, and
          identity
        </Text>
        <Button
          bg={white}
          radius="10px"
          color="#0055ba"
          display="flex"
          gap="5px"
          padding="15px 20px"
          width="185px"
          alignitems="center"
          hgap="7px"
        >
          <Text size="14px" heavy>
            Start with Connect
          </Text>
          <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </Card>
      <Card flex gap="20px" mdflexdirection="column">
        {DigitalCardDetails.map((detail, index) => (
          <Card
            key={index}
            height="698px"
            flexratio="1"
            bgimage={`url(${detail.image})`}
            bgsize="cover"
            bgposition="bottom"
            radius="15px"
            flex
            flexdirection="column"
            gap="20px"
            padding="60px 60px"
            smpadding="40px 24px 200px"
          >
            <Image src={detail.icon} alt="connect" width="40px" />
            <TitleText
              size="45px"
              lineheight="56.25px"
              color={detail.color}
              mdsize="30px"
              smsize="24px"
              mdlineheight="38px"
              smlineheight="30px"
            >
              {detail.heading}
            </TitleText>
            <Text
              size="18px"
              lineheight="24px"
              color={detail.color}
              width="370px"
              smwidth="100%"
              mdsize="16px"
              smsize="15px"
              mdlineheight="22px"
              smlineheight="21px"
            >
              {detail.details}
            </Text>
            <Button
              bg={detail.buttonbg}
              radius="10px"
              color={white}
              display="flex"
              gap="5px"
              padding="15px 20px"
              width={detail.buttonWidth}
              alignitems="center"
              hgap="7px"
            >
              <Text size="15px" heavy>
                {detail.buttonDetails}
              </Text>
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </Card>
        ))}
      </Card>
    </Card>
  );
};

export default DigitalFinanceCards;
