import styled from "styled-components";

export const ColumnsWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1 0 50%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled(Column)`
  @media screen and (min-width: 600px) {
    padding-right: 10px;
  }
`;

export const RightColumn = styled(Column)`
  @media screen and (min-width: 600px) {
    padding-left: 10px;
  }
`;
