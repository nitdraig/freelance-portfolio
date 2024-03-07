import Script from "next/script";
import IndexView from "./views/IndexView";
import { LanguageProvider } from "./components/LanguageContext";

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-311Z5S3BVP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
         gtag('config', 'G-311Z5S3BVP');
                  `}
      </Script>

      <IndexView />
    </>
  );
}
