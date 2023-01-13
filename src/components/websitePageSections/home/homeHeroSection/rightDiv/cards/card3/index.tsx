import styled, { keyframes } from "styled-components";

const animateOnSkew = keyframes`
  0%   { transform: skew(0deg, 0deg); top: 0px; left: 310px; }
  50% { transform: skew(0deg, 28deg); top: 0px;  left: 370px; }
  100% { transform: skew(0deg, 28deg); top: -120px; left: 300px; }
`;

const animateOnSlide = keyframes`
  0%   { bottom: 380px; right: 190px; }
  100% { bottom: -50px; right: -50px; }
`;

const animateOnSliding = keyframes`
  0%   { left: 190px; }
  2% { left: 0px; }
  100% {left: -290px;}
`;
const animateOnContinousSliding = keyframes`
  0%   { left: 190px; }
  100% {left: -290px;}
`;

export const AnimationCard = styled("div")`
  overflow: hidden;
  animation: ${animateOnSkew} 1s 0.5s forwards;
  width: 189px;
  height: 374px;
  background: rgba(217, 217, 217, 0.75);
  z-index: 1;
  position: absolute;
  transform: skew(0deg, 0deg);
  border-radius: 15px;
  left: 300px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AnimationScreenCard = styled("div")`
  animation: ${animateOnSlide} 0.5s 4.8s forwards;
  position: absolute;
  width: 150%;
  height: 150%;
  background: black;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 380px;
  right: 190px;
`;

const AnimationImageCard = styled("img")`
  animation: ${animateOnSliding} 20s 5.5s forwards linear;
  position: absolute;
  width: 290px;
  top: 0;
  left: 190px;
`;

const AnimationContinousImageCard = styled("img")`
  animation: ${animateOnContinousSliding} 31s 11.5s linear infinite;
  position: absolute;
  width: 290px;
  top: 0;
  left: 190px;
`;

const Card3 = () => {
  return (
    <AnimationCard>
      <AnimationScreenCard />
      <AnimationImageCard src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671709780/image_ywnynl.png" />
      <AnimationContinousImageCard src="https://res.cloudinary.com/dsx94d7pa/image/upload/v1671709780/image_ywnynl.png" />
    </AnimationCard>
  );
};

export default Card3;
