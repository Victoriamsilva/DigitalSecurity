import { createGlobalStyle } from "styled-components";
import AppRoutes from "./Routes/routes";
import "./languages/index";

const GlobalStyles = createGlobalStyle`
  html {
    --main-green: #082335;
    --main-background: #031a29;
    --white: #fff;
    --green-lighter: #46ebad;
    --blue-light: #30eff2;
    --blue-dark: #063738;
    --main-background-opacity: #010d16c7;
    --purple-light: #e9c5ff;
    --light-gray: rgb(233, 228, 228);
    scroll-behavior: smooth;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-moz-selection { 
      color: var(--blue-dark);
      background: var(--green-lighter);
    }
    ::selection {
      color: var(--blue-dark);
      background: var(--green-lighter);
    }
  }

  body {
    font-family: "Inconsolata", monospace;
    color: var(--white);
    background-color: var(--main-green);
    overflow-x: hidden;
    p {
      font-family: 'Noto Sans', sans-serif;
      line-height: 30px;
    }
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}
