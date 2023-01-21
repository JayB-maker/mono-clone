import { Card, Image, LinkText, TitleText, white } from "../../../../ui/styles";

interface ReusableCardProps {
  icon?: string;
  title?: string;
  handle?: string;
  path: string;
  image: string;
}

const ReusableCard = (props: ReusableCardProps) => {
  const { handle, icon, image, path, title } = props;
  return (
    <Card
      flexratio="1"
      bg={white}
      radius="15px"
      padding={image.length === 0 ? "60px" : "80px 60px 0"}
      smpadding={image.length === 0 ? "24px" : "40px 24px 0"}
      smflexdirection={image.length === 0 ? "unset" : "column"}
      flex
      gap="80px"
      alignitems="center"
    >
      <Card
        flex
        flexdirection="column"
        gap="20px"
        flexratio="1"
        alignitems="center"
      >
        <Image src={icon} width="67px" height="67px" />
        <TitleText
          size={image.length === 0 ? "36px" : "56px"}
          smsize={image.length === 0 ? "24px" : "30px"}
          lineheight={image.length === 0 ? "45px" : "64.4px"}
          smlineheight={image.length === 0 ? "30px" : "35px"}
          smtextalign="center"
        >
          {title}
        </TitleText>
        <LinkText to={path} flex alignitems="center" width="fit-content">
          {handle}
          <i className="fa-sharp fa-light fa-arrow-up-right"></i>
        </LinkText>
      </Card>
      {image.length > 0 && (
        <Card flexratio="1" height="380px">
          <Image src={image} smwidth="100%" />
        </Card>
      )}
    </Card>
  );
};

export default ReusableCard;
