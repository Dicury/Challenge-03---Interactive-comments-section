"use client";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "@/tokens/theme";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.neutral.lightGray}
}

button, 
input {
    font-family: inherit;
}

p {
  color: ${(props) => props.theme.colors.neutral.grayishBlue};
  line-height: 1.5rem;
}

`;

export function Providers({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
}
