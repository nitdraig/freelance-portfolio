import Script from "next/script";
import IndexView from "./views/IndexView";

export default function Home() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLEANALYTIC}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
         gtag('config', ${process.env.NEXT_PUBLIC_GOOGLEANALYTIC});
                  `}
      </Script>

      <IndexView />
    </>
  );
}
