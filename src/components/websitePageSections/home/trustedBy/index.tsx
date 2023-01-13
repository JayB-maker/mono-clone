import {
  Card,
  Image,
  InnerSection,
  MainSection,
  Text,
} from "../../../ui/styles";

const partnerDetails = [
  {
    name: "carbon",
    logo: "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671781981/Mono-clone/carbon-logo_l2luye.svg",
  },
  {
    name: "autocheck",
    logo: "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671781983/Mono-clone/image-13autochek_ifja1m.svg",
  },
  {
    name: "flutterwave",
    logo: "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671781985/Mono-clone/group-45flw_bovf8n.svg",
  },
  {
    name: "evolve",
    logo: "https://res.cloudinary.com/dsx94d7pa/image/upload/v1671781988/Mono-clone/image-10evolve_credit_rkptd0.svg",
  },
];

const TrustedBy = () => {
  return (
    <MainSection width="100%">
      <InnerSection>
        <Card flex flexdirection="column" gap="50px" padding="70px 0">
          <Text size="15px" lineheight="22.5px">
            Trusted by
          </Text>
          <Card flex gap="40px" alignitems="center">
            {partnerDetails.map((partner, index) => (
              <Card width="255px" key={index}>
                <Image src={partner.logo} alt={partner.name} />
              </Card>
            ))}
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default TrustedBy;
