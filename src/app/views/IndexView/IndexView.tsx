"use client";
import React from "react";

import { NavBar } from "@/app/components/main/navbar/Navbar";
import Footer from "@/app/components/main/footer/Footer";
import App from "./sections/app/App";
import { LanguageProvider } from "@/app/utils/LanguageContext";
const IndexView = ({ Component, pageProps }: any) => {
  return (
    <>
      <LanguageProvider>
        <NavBar {...pageProps} />
        <App {...pageProps} />
        <Footer {...pageProps} />
      </LanguageProvider>
    </>
  );
};

export default IndexView;
