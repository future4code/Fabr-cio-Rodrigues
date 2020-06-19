import styled from "styled-components";

export const Screen = styled.div`
  width: 375px;
  height: 475px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px #0000000f;

  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-duration: 2s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 320px) {
    width: 295px;
    height: 375px;
  }

  @media (max-width: 360px) {
    width: 325px;
    height: 450px;
  }
`;

export const ScreenFadeOut = styled.div`
  animation-name: fadeOutOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-duration: 2s;
  animation-delay: 3s;

  @keyframes fadeOutOpacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MatchHeader = styled.h1`
  color: #f50057;
  position: fixed;
  font-family: "Satisfy", cursive;
  width: 100%;
  font-size: 32pt;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

export const MatchText = styled.h1`
  color: white;
  position: fixed;
  font-family: "Segoe UI";
  font-weight: bold;
  width: 95%;
  font-size: 20pt;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  filter: blur(4px);
  -webkit-filter: blur(4px);
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  width: 375px;
  height: 475px;

  @media (max-width: 320px) {
    width: 295px;
    height: 375px;
  }

  @media (max-width: 360px) {
    width: 325px;
    height: 450px;
  }
`;
