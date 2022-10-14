import styled from "styled-components";

export const Wrapper = styled.div<{ background: any }>`
  position: relative;
  background-color: var(--main-green);
  padding: 50px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: ${(props) => `url(${props.background})`};
    z-index: 1;
    background-size: cover;
    opacity: 0.6;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const TipsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  margin-top: 100px;
  position: relative;
  z-index: 2;
  .tip {
    flex: 0 0 50%;
    margin-bottom: 50px;
    position: relative;
    p {
      color: var(--light-gray);
      margin-top: 20px;
    }
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 2px;
      background-color: var(--green-lighter);
    }
    &::before {
      position: absolute;
      content: "";
      display: block;
      background-color: var(--green-lighter);
      height: 2px;
      z-index: 1;
      top: 40px;
    }
    &:nth-child(even) {
      transform: translateY(-150px);
      padding: 0 0 0 40px;
      &::before {
        width: 40px;
        left: 0;
      }
      &::after {
        height: calc(100% + 55px);
        left: -1px;
        top: 40px;
      }
    }
    &:last-child {
      &::after {
        height: 150px;
      }
    }
    &:nth-child(odd) {
      padding: 0 40px 0 0;
      &::before {
        width: calc(100% - 80px);
        left: 81px;
      }
    }

    @media screen and (max-width: 600px) {
      p,
      h2 {
        text-align: center;
      }
      &::after,
      &::before {
        display: none;
      }
      &:nth-child(even) {
        transform: translateY(0px);
        padding: 0;
      }
      &:nth-child(odd) {
        padding: 0;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const TipIcon = styled.div`
  box-shadow: 5px 5px 10px -7px rgba(70, 235, 173, 0.75);
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background: linear-gradient(
    39deg,
    rgba(21, 103, 121, 1) 0%,
    rgba(70, 235, 173, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  z-index: 2;
  position: relative;

  img {
    width: 50%;
    height: auto;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto 20px auto;
  }
`;
