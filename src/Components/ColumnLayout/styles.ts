import styled from "styled-components";

interface ColumnsWrapperProps {
  reverse: boolean;
}

export const ColumnsWrapper = styled.div<ColumnsWrapperProps>`
  display: flex;
  margin-bottom: 40px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1 0 50%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export const LeftColumn = styled(Column)`
  @media screen and (min-width: 750px) {
    padding-right: 10px;
  }
`;

export const RightColumn = styled(Column)`
  @media screen and (min-width: 750px) {
    padding-left: 10px;
  }
`;
