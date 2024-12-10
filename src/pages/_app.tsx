import Layout from "@/components/Bar/Layout";
import ThemeProviderWrapper from "@/components/utils/ThemeProviderWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProviderWrapper>
  );
}
