import { Card, Circle, Image, Text, white } from "../../styles";

const Copyright = () => {
  return (
    <Card
      flex
      smflexdirection="column"
      smalignitems="center"
      smgap="32px"
      justifycontent="space-between"
      margin="-40px 0 0"
      mdmargin="0"
    >
      <Card flex gap="40px" smflexdirection="column" smalignitems="center">
        <Image
          src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782271/Mono-clone/footer-logo_pk0ril.svg"
          alt="mono-logo"
        />
        <Text color={white} size="15px" lineheight="20px">
          &copy;Mono Technologies Nigeria Limited
        </Text>
      </Card>
      <Card flex gap="20px" alignitems="center">
        <a
          href="https://twitter.com/mono_HQ"
          target="_blank"
          style={{ display: "flex", gap: "6px", textDecoration: "none" }}
        >
          <Image
            src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782273/Mono-clone/vector-1_xshtvx.svg"
            alt="mono-twitter"
          />
          <Text color={white} size="15px" lineheight="20px">
            Twitter
          </Text>
        </a>
        <Circle height="5px" width="5px" bg={white} />
        <a
          href="https://www.linkedin.com/company/withmono/"
          target="_blank"
          style={{ display: "flex", gap: "6px", textDecoration: "none" }}
        >
          <Image
            src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782295/Mono-clone/vector-2_vge92j.svg"
            alt="mono-linkedin"
          />
          <Text color={white} size="15px" lineheight="20px">
            LinkedIn
          </Text>
        </a>
      </Card>
    </Card>
  );
};

export default Copyright;
