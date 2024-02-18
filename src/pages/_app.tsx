import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/ccb.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}




