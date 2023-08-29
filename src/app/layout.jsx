import { Rubik } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { Providers } from "./providers";
import { CurrentUserProvider } from "@/context/DadosContext";

const rubik = Rubik({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={rubik.className}>
        <CurrentUserProvider>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </CurrentUserProvider>
      </body>
    </html>
  );
}
