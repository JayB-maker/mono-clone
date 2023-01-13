import {
  Card,
  InnerSection,
  MainSection,
  TitleText,
  white,
} from "../../../ui/styles";
import GettingStartedCards from "./gettingStartedCards/GettingStartedCards";

const GetStarted = () => {
  return (
    <MainSection
      width="100%"
      bgimage='url("https://res.cloudinary.com/dsx94d7pa/image/upload/v1671782216/Mono-clone/getting-started-bg_lrnthg.jpg")'
      bgsize="cover"
      bgposition="center"
      padding="150px 0"
      margin="50px 0 0"
    >
      <InnerSection>
        <Card flex flexdirection="column" gap="80px">
          <TitleText size="64px" lineheight="73.6px" color={white}>
            Getting Started
          </TitleText>
          <GettingStartedCards />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default GetStarted;
