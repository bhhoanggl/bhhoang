import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontIBM } from "@/config/fonts";
import "@/styles/globals.sass";
import DefaultLayout from "@/layouts/default";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme="light">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  ibm: fontIBM.style.fontFamily,
};
