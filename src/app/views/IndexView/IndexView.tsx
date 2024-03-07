"use client";
import React from "react";

import { LanguageProvider } from "@/app/components/LanguageContext";
import { NavBar } from "@/app/layouts/main/navbar/Navbar";
import Footer from "@/app/layouts/main/footer/Footer";
import App from "./components/app/App";
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
