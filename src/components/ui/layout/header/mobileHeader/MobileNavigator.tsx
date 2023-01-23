import { navDetails } from "../../../../../data";
import {
  black,
  Button,
  Card,
  Divider,
  Image,
  InnerSection,
  LinkText,
  MainSection,
  primaryBlue,
  Text,
  TitleText,
  white,
} from "../../../styles";

const MobileNavigator = () => {
  return (
    <>
      <Card
        width="100%"
        height="100%"
        bg={white}
        position="fixed"
        top="0"
        left="0"
        margin="0px 0 0"
        index="100"
        flex
        justifycontent="center"
      >
        <Card flex flexdirection="column" width="512px" smwidth="100%">
          {navDetails.map((nav, index) => (
            <>
              <Card
                key={index}
                padding="25px"
                flex
                flexdirection="column"
                gap="20px"
              >
                <Text size="13px" color="#606060">
                  {nav.navMain}
                </Text>
                <Card display="grid" gridcolumn="1fr 1fr" gap="20px">
                  {nav.subNav.map((subNav, index) => (
                    <LinkText
                      to={subNav.handle}
                      key={index}
                      flex
                      alignitems="center"
                      color={black}
                    >
                      <Image
                        src={subNav.icon}
                        width="24px"
                        margin="0 10px 0 0"
                      />
                      <TitleText size="16px">{subNav.nav}</TitleText>
                    </LinkText>
                  ))}
                </Card>
              </Card>
              <Divider width="200vw" color="#E5E5E5" />
            </>
          ))}
          <MainSection width="100%" position="absolute" bottom="96px">
            <InnerSection>
              <Button
                width="100%"
                color={white}
                bg={primaryBlue}
                size="14px"
                padding="13px"
                radius="8px"
                index="10001"
              >
                Sign in
              </Button>
            </InnerSection>
          </MainSection>
        </Card>
      </Card>
    </>
  );
};

export default MobileNavigator;
