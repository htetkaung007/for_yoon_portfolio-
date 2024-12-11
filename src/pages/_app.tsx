import Layout from "@/components/Bar/Layout";
import ThemeProviderWrapper from "@/components/utils/ThemeProviderWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({ key: "css", prepend: true });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProviderWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProviderWrapper>
    </CacheProvider>
  );
}
