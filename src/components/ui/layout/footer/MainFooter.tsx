import { footerContents } from "../../../../data";
import { Card, LinkText, TitleText, white } from "../../styles";

const MainFooter = () => {
  return (
    <>
      <Card flex gap="50px">
        {footerContents.map((item) => (
          <Card
            key={item.id}
            width="250px"
            flex
            flexdirection="column"
            gap="18px"
          >
            <TitleText
              color="#b5b5b5"
              weight="500"
              size="16px"
              lineheight="19px"
            >
              {item.heading}
            </TitleText>
            <Card flex flexdirection="column" gap="18px">
              {item.details.map((subitem) =>
                subitem.link === true ? (
                  <a
                    href={subitem.path}
                    target="_blank"
                    key={subitem.id}
                    style={{
                      width: "fit-content",
                      color: `${white}`,
                      fontWeight: "400",
                      fontSize: "16px",
                      textDecoration: "none",
                      lineHeight: "19px",
                    }}
                  >
                    {subitem.handle}
                  </a>
                ) : (
                  <LinkText
                    width="fit-content"
                    to={subitem.path}
                    key={subitem.id}
                    color={white}
                    weight="400"
                    size="16px"
                    lineheight="19px"
                  >
                    {subitem.handle}
                  </LinkText>
                )
              )}
            </Card>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default MainFooter;
