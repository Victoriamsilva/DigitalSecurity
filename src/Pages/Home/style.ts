import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  margin: 20px 0;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
