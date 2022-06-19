import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around;
  margin: 20px 0;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
