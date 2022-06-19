import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  position: relative;
  z-index: 999;
`;

interface NavProps {
  isOpen: boolean;
}

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    li {
      cursor: pointer;
      padding: 15px;
      margin: 0 4px;
      color: var(--white);
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      text-align: center;
      &:hover {
        color: var(--green-lighter);
      }
      &.dropdown {
        position: relative;
        .dropdown-title {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow,
        img {
          width: 20px;
          transition: all 0.3s ease-in-out;
          &.up {
            transform: rotate(180deg);
          }
        }
        .dropdown-content {
          &.show {
            display: block;
          }
          &:not(&.show) {
            display: none;
          }
          position: absolute;
          top: 100%;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          /* min-width: 200px; */
          width: fit-content;
          background-color: var(--main-background-opacity);
          transition: all 0.3s ease-in-out;
          border-radius: 10px;
          overflow: hidden;
          .dropdown-item {
            color: var(--white);
            display: block;
            transition: all 0.3s ease-in-out;
            padding: 10px 20px;
            width: 100%;
            text-align: center;
            cursor: pointer;
            &:hover {
              color: var(--blue-light);
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    position: fixed;
    width: 240px;
    height: 100vh;
    background-color: var(--black);
    top: 0;
    right: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(240px)"};
    align-items: flex-start;
    ul {
      flex-direction: column;
      margin-top: 50px;
      width: 100%;
      li {
        padding: 5px 0;
        margin: 5px 0;
        &.dropdown {
          flex-direction: column;
          .dropdown-title {
            padding: 0 10px;
          }
          .dropdown-content {
            position: relative;
            margin-top: 15px;
            background: var(--black-lighter);
            border-radius: 0;
          }
        }
      }
    }
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green-lighter);
  font-size: 1.5rem;
  img {
    height: 50px;
    width: auto;
    margin-right: 5px;
  }
`;

const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  transition: all 0.3s ease-in;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const OpenMenuIcon = styled(Icon)`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: var(--green-lighter);
    opacity: 0.4;
    transition: all 0.3s ease-in;
  }
  span {
    display: block;
    height: 1.5px;
    width: 20px;
    background-color: var(--white);
    margin: 2px 0;
    position: relative;
    z-index: 2;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

export const CloseMenuIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 10px;
  img {
    width: 20px;
    height: auto;
  }
`;
