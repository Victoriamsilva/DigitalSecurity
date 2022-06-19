import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid var(--blue-light);
  background-color: transparent;
  padding: 7px 60px;
  color: var(--blue-light);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:hover {
    color: var(--white);
    &::before {
      transform: translateX(0);
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease;
    background-color: var(--blue-light);
    z-index: -1;
  }
`;
