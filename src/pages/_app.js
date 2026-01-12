import { useRouter } from "next/router";

import { ThemeProvider } from "@/modules/theme_provider";
import Layout from "@/modules/layout";
import Script from "next/script";

import "../styles/style.scss";
import "../styles/base.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Technozis</title>
        <link rel="icon" href="/static/images/brand-logo-2.png" />
      </Head>
      <Layout>
        <div className="contentWrapper">
          {router.pathname === "/" ? (
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </Layout>
    </>
  );
}
