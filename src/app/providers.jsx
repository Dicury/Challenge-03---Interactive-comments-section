"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/tokens/theme";
import { GlobalStyles } from "@/tokens/GlobalStyles";

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
