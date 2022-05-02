import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Danish Saleem | Software Engineer"
        titleTemplate="Danish Saleem | Software Engineer"
        defaultTitle="Danish Saleem | Software Engineer"
        description="Hey! I'm Danish Saleem, A Full Stack Software Engineer, Writer and a Night Owl!"
        openGraph={{
          url: "https://www.mrdanishsaleem.vercel.app/",
          title: "Danish Saleem | Software Engineer",
          description:
            "Hey! I'm Danish Saleem, A Full Stack Software Engineer, Wrter and a Night Owl!",
          images: [
            {
              url: "#",
              width: 800,
              height: 420,
              alt: "Danish Saleem | Software Engineer",
            },
          ],
        }}
        twitter={{
          handle: "@MrDanishSaleem",
          site: "@mrdanishsaleem",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Engineer, mrdanishsaleem, Web Developer, web development, web developer, writer, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
