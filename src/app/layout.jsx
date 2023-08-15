import "./globals.css";
import { Rubik } from "next/font/google";
import StyledComponentsRegistry from "./registry";

const rubik = Rubik({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={rubik.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
