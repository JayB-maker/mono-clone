import styled, { keyframes } from "styled-components";
import { black, Card, Image } from "../../../../../../ui/styles";

const animateOnSkew = keyframes`
  0%   { transform: skew(0deg, 0deg); top: 0px; left: 154px; }
  50% { transform: skew(0deg, 28deg); top: 0px; left: 174px; }
  100% { transform: skew(0deg, 28deg); top: -64px; left: 144px; }
`;

const animateOnOpacity = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const animateDotLine = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export const AnimationCard = styled("div")`
  overflow: hidden;
  animation: ${animateOnSkew} 1s 0.5s forwards;
  width: 189px;
  height: 374px;
  background: rgba(217, 217, 217, 0.75);
  z-index: 2;
  position: absolute;
  transform: skew(0deg, 0deg);
  border-radius: 15px;
  top: 0px;
  left: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AnimationScreenCard = styled("div")`
  animation: ${animateOnOpacity} 0.5s 2.8s forwards;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

const DottedLine = styled("div")`
  width: 45px;
  height: 240px;
  transform: skew(0deg, 28deg);
  border-radius: 20px 0 0 0;
  border-left: 1px dashed ${black};
  border-top: 1px dashed ${black};
  position: absolute;
  top: -140px;
  left: 240px;
  z-index: 4;
`;

const Card2 = () => {
  return (
    <>
      <AnimationCard>
        <AnimationScreenCard>
          <Card
            flex
            alignitems="center"
            justifycontent="center"
            width="50px"
            height="50px"
            radius="50%"
            bg="black"
            overflow="hidden"
          >
            <Image
              src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1672220386/Mono-clone/mono_yyxctq.jpg"
              alt="mono-logo"
              width="100%"
            />
          </Card>
        </AnimationScreenCard>
      </AnimationCard>
      <DottedLine />
    </>
  );
};

export default Card2;
