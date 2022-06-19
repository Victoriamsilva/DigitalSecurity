import styled from "styled-components";

export const CardsWrapper = styled.div`
  height: 425px;
  margin: auto;
  position: relative;
  width: 100%;
  margin-top: 50px;
  max-width: 100vw;
  overflow: hidden;
  &::before,
  &::after {
    background: linear-gradient(
      to right,
      #082335 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 420px;
    position: absolute;
    width: 100px;
    z-index: 4;
  }

  &::after {
    right: 0;
    top: -25px;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: -25px;
  }
`;

export const CardsSlider = styled.div`
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(300px * 10);
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 5));
    }
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 400px;
  margin: 0 15px;
  box-shadow: 2px 2px 15px 0px rgba(102, 14, 139, 1);
  padding: 20px;
  text-align: center;
  background: linear-gradient(
    308deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(102, 14, 139, 1) 100%
  );

  transition: all 0.3s ease-in-out;
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

export const CardImage = styled.img`
  width: 175px;
  height: 175px;
  margin-bottom: 10px;
  border-radius: 20%;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--purple-light);
`;

// @keyframes scroll {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(calc(-300px * 5));
//   }
// }
