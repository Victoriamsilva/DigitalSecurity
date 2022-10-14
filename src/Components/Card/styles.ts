import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  min-width: 250px;
  margin: 0 20px 20px 20px;
  padding: 20px;
  text-align: center;
  background: linear-gradient(
    308deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(102, 14, 139, 1) 100%
  );

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--purple-light);
`;

export const CardImage = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 10px;
`;
