import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 81px;
  background: radial-gradient(
    circle,
    rgba(22, 59, 84, 1) 0%,
    rgba(8, 35, 53, 1) 65%
  );
  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
  }
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
  @media screen and (max-width: 600px) {
    padding: 20px 20px;
    margin: 20px;
  }
`;
