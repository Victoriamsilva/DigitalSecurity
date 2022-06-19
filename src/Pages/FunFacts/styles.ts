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
`;

export const Container = styled.div`
  position: relative;
  z-index: 3;
`;

export const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  justify-content: flex-start;
  border-top: solid 1px var(--blue-light);
  h3 {
    font-size: 25px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    /* color: var(--purple-light); */
  }
  p {
    color: var(--light-gray);
    width: 100%;
  }
  div {
    background-color: var(--blue-light);
    width: 35px;
    height: 35px;
    min-height: 35px;
    min-width: 35px;
    border-radius: 100%;
    color: var(--main-green);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    margin-right: 25px;
  }
`;
