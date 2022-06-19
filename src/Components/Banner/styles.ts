import styled from "styled-components";

export const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background: rgb(8, 35, 53);
  background: linear-gradient(
    0deg,
    rgba(8, 35, 53, 1) 0%,
    rgba(48, 91, 91, 1) 100%
  );
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: $white;
  width: 40%;
  max-width: 500px;
  padding-left: 100px;
  position: relative;
  z-index: 2;

  p {
    margin: 35px 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0;
  }

  @media screen and (max-width: 1000px) and (min-width: 600px) {
    width: 70%;
    padding-left: 50px;
  }
`;

export const BannerTitle = styled.h1`
  background-color: var(--blue-dark);
  color: var(--blue-light);
  margin-bottom: 10px;
  padding: 0 1px;
  font-size: 4rem;
  position: relative;
  z-index: 2;
`;

export const PatternImg = styled.img`
  position: absolute;
  left: -45%;
  bottom: -75%;
  z-index: 1;
`;

export const BinaryImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 75vw;
`;

export const BannerImg = styled.img`
  z-index: 1;
  height: 80vh;
  @media screen and (max-width: 600px) {
    position: absolute;
    right: 0;
    width: 100vw;
    opacity: 0.2;
  }
`;
