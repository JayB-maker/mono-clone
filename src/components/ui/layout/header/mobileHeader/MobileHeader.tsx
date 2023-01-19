import { useState } from "react";
import {
  Card,
  Image,
  InnerSection,
  LinkText,
  MainSection,
  white,
} from "../../../styles";
import MobileNavigator from "./MobileNavigator";

const MobileHeader = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const handleNav = () => {
    setIsMobileNav(!isMobileNav);
  };
  return (
    <>
      <MainSection
        width="100%"
        position={isMobileNav ? "fixed" : "unset"}
        top="0"
        left="0"
        bg={white}
        index="100"
      >
        <InnerSection>
          <Card
            display="none"
            mddisplay="flex"
            smdisplay="flex"
            justifycontent="space-between"
            alignitems="center"
            padding="24px 0"
            // position=
            index="1000"
            top="0"
            left="0"
            width="100%"
          >
            <LinkText to="/">
              <Image
                src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671781649/Mono-clone/logo_y19idq.svg"
                alt="mono-logo"
              />
            </LinkText>
            <i
              style={{ fontSize: "24px", fontWeight: "600" }}
              className={isMobileNav ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              onClick={handleNav}
            />
          </Card>
        </InnerSection>
      </MainSection>
      {isMobileNav && <MobileNavigator />}
    </>
  );
};

export default MobileHeader;
