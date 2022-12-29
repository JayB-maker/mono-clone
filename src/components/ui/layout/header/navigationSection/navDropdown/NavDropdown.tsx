import {
  black,
  Card,
  Image,
  LinkText,
  primaryBlue,
  Text,
  TitleText,
} from "../../../../styles";

interface navProps {
  nav?: string;
  id?: any;
  handle?: any;
  detail?: any;
  icon?: string;
}

const NavDropdown = (props: navProps) => {
  const { handle, nav, detail, icon } = props;
  return (
    <Card>
      <LinkText
        flex
        gap="20px"
        alignitems="center"
        padding="15px 30px"
        width="100%"
        to={handle}
      >
        <Image src={icon} />
        <Card flex flexdirection="column" gap="">
          <TitleText
            size="14px"
            lineheight="23px"
            heavy
            color={detail !== false ? black : primaryBlue}
          >
            {nav}
          </TitleText>
          {detail !== false && (
            <Text
              size="14px"
              lineheight="23px"
              color={detail !== false ? black : primaryBlue}
              width="280px"
            >
              {detail}
            </Text>
          )}
        </Card>
      </LinkText>
    </Card>
  );
};

export default NavDropdown;
