import styled from "styled-components";

export const Section = styled.section`
  padding: 50px;
  background: ${(props) => `var(${props.color})`};
  background-image: ${(props) =>
    props.color === "--main-background"
      ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      : ""};
  h2 {
    font-size: 3rem;
    position: relative;
    width: fit-content;
    margin-bottom: 60px;
    &::before {
      content: "";
      width: 30%;
      height: 4px;
      border-radius: 3px;
      background-color: var(--blue-light);
      position: absolute;
      left: 0;
      top: calc(100% + 5px);
      transition: width 0.3s ease-in-out;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 20px 20px;
    h2 {
      font-size: 2rem;
      text-align: center;
      &::before {
        display: none;
      }
    }
    p {
      text-align: center;
    }
  }
`;
