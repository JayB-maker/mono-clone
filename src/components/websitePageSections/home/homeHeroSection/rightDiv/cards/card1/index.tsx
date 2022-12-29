import styled, { keyframes } from "styled-components";
import { black, Card, white } from "../../../../../../ui/styles";

const animateOnSkew = keyframes`
  0%   { transform: skew(0deg, 0deg); }
  100% { transform: skew(0deg, 28deg); }
`;

const animateOnSlide = keyframes`
  0%   { top: 380px; }
  100% { top: 0px; }
`;

const AnimationCard = styled("div")`
  transform: skew(0deg, 0deg);
  animation: ${animateOnSkew} 0.5s 0.5s forwards;
  overflow: hidden;
  width: 189px;
  height: 374px;
  background: linear-gradient(
    193.91deg,
    rgba(254, 254, 254, 0.5) 8.39%,
    rgba(228, 228, 228, 0.5) 87.94%
  );
  z-index: 3;
  position: absolute;
  border-radius: 15px;
  left: -23px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AnimationScreenCard = styled("div")`
  animation: ${animateOnSlide} 0.5s 1.8s forwards;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 380px;
`;

const DottedLine = styled("div")`
  width: 87px;
  height: 280px;
  transform: skew(0deg, 28deg);
  border-radius: 0 0 20px 0;
  border-right: 1px dashed ${black};
  border-bottom: 1px dashed ${black};
  position: absolute;
  top: 138px;
  left: 150px;
  z-index: 4;
`;

const Card1 = () => {
  return (
    <>
      <AnimationCard>
        <AnimationScreenCard>
          <Card
            flex
            flexdirection="column"
            alignitems="center"
            justifycontent="center"
            gap="24px"
            width="fit-content"
            height="fit-content"
          >
            <Card
              padding="21px 15px"
              bg="#fab613"
              radius="15px"
              flex
              alignitems="center"
              justifycontent="center"
            >
              <i
                className="fa-solid fa-house-chimney"
                style={{ fontSize: "25px", color: `${white}` }}
              />
            </Card>
            <Card flex flexdirection="column" gap="10px" alignitems="center">
              <Card width="126px" height="5px" radius="12px" bg="#d1d6de" />
              <Card width="78px" height="5px" radius="12px" bg="#d1d6de" />
            </Card>
          </Card>
          <Card
            flex
            alignitems="center"
            justifycontent="center"
            width="100%"
            position="absolute"
            height="44px"
            bottom="0"
            left="0"
            bg="#ddf3d4"
          >
            <Card width="126px" height="5px" radius="12px" bg="#60a944" />
          </Card>
        </AnimationScreenCard>
      </AnimationCard>
      <DottedLine />
    </>
  );
};

export default Card1;
