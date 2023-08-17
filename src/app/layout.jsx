import { Rubik } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { Providers } from "./providers";

const rubik = Rubik({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={rubik.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
