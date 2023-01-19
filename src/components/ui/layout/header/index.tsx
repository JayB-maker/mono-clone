import {
  Button,
  Card,
  Image,
  InnerSection,
  LinkText,
  MainSection,
  primaryBlue,
  white,
} from "../../styles";
import MobileHeader from "./mobileHeader/MobileHeader";
import NavigationSection from "./navigationSection/NavigationSection";

const Header = () => {
  return (
    <>
      <MainSection width="100%">
        <InnerSection>
          <Card
            flex
            justifycontent="space-between"
            alignitems="center"
            padding="24px 0"
            mddisplay="none"
          >
            <LinkText to="/">
              <Image
                src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671781649/Mono-clone/logo_y19idq.svg"
                alt="mono-logo"
              />
            </LinkText>
            <NavigationSection />
            <Button
              padding="13px 20px"
              color={white}
              bg={primaryBlue}
              radius="10px"
            >
              Sign in
            </Button>
          </Card>
        </InnerSection>
      </MainSection>
      <MobileHeader />
    </>
  );
};

export default Header;
