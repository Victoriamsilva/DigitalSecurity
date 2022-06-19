import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 81px;
  background: radial-gradient(
    circle,
    rgba(22, 59, 84, 1) 0%,
    rgba(8, 35, 53, 1) 65%
  ); ;
`;

export const DivTitle = styled.div`
  margin: 20px 50px;
  background-color: var(--main-background);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 50px;
  h2 {
    padding-bottom: 20px;
  }
  p {
    color: var(--light-gray);
  }
`;
