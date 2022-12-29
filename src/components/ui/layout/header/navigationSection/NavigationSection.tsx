import { useState } from "react";
import { navDetails } from "../../../../../data";
import { black, Card, Text, white } from "../../../styles";
import NavDropdown from "./navDropdown/NavDropdown";

const NavigationSection = () => {
  const [hover, setHover] = useState(null);

  const toggle = (index: any) => {
    if (hover === index) {
      return setHover(null);
    }

    setHover(index);
  };

  return (
    <Card
      width="480px"
      height="30px"
      flex
      justifycontent="center"
      alignitems="center"
    >
      {navDetails.map((navs, index) => (
        <Card
          position="relative"
          key={index}
          onMouseEnter={() => toggle(index)}
          onMouseLeave={() => toggle(index)}
          pointer
          index="15"
        >
          <Card
            padding="13px 15px"
            flex
            alignitems="center"
            gap="7px"
            justifycontent="center"
          >
            <Text size="15px" lineheight="22.5px" heavy>
              {navs.navMain}
            </Text>{" "}
            <i
              className="fa-solid fa-angle-down"
              style={{ fontSize: "15px" }}
            />
          </Card>
          {hover === index && (
            <Card
              position="absolute"
              top="20px"
              left="50%"
              transform="translateX(-50%)"
              index="10"
            >
              {navs.subNav.length > 4 ? (
                <Card
                  radius="15px"
                  padding="15px 0"
                  display="grid"
                  gridcolumn="1fr 1fr"
                  margin="25px 0 0"
                  width="810px"
                  border="0.5px solid rgba(0, 0, 0, 0.1)"
                  shadow="40px 40px 40px rgba(0, 0, 0, 0.1)"
                  color={black}
                  bg={white}
                >
                  {navs.subNav.map((subNavitem, index) => (
                    <NavDropdown
                      key={index}
                      handle={subNavitem.handle}
                      nav={subNavitem.nav}
                      detail={subNavitem.detail}
                      icon={subNavitem.icon}
                    />
                  ))}
                </Card>
              ) : (
                <Card
                  radius="15px"
                  padding="15px 0"
                  flex
                  flexdirection="column"
                  margin="25px 0 0"
                  width={navs.detailed ? "420px" : "300px"}
                  border="0.5px solid rgba(0, 0, 0, 0.1)"
                  shadow="40px 40px 40px rgba(0, 0, 0, 0.1)"
                  color={black}
                  bg={white}
                >
                  {navs.subNav.map((subNavitem, index) => (
                    <NavDropdown
                      key={index}
                      handle={subNavitem.handle}
                      nav={subNavitem.nav}
                      detail={subNavitem.detail}
                      icon={subNavitem.icon}
                    />
                  ))}
                </Card>
              )}
            </Card>
          )}
        </Card>
      ))}
    </Card>
  );
};

export default NavigationSection;
