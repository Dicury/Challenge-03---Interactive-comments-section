import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.neutral.lightGray};
}

body {
  @media (min-width: 769px) {
    padding: 5vh 5vh 1.5rem 10vw;
  }
}

button, 
input,
textarea {
    font-family: inherit;
}

p {
  color: ${(props) => props.theme.colors.neutral.grayishBlue};
  line-height: 1.5rem;
}

`;
