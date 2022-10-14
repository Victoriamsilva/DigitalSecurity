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

export const Container = styled.div`
  position: relative;
  z-index: 3;
`;

export const Blocks = styled.div`
  display: flex;
  padding: 50px;
  align-items: center;
  border-top: solid 1px var(--blue-light);
  h3 {
    width: 300px;
    min-width: 300px;
    font-size: 28px;
  }
  p {
    color: var(--light-gray);
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    flex-direction: column;
    h3 {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }
    p {
      text-align: center;
    }
  }
`;
