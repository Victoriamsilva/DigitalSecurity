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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
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
      &:hover {
        color: var(--green-lighter);
      }
      &.dropdown {
        position: relative;
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
