"use client";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/services";
import Why from "./components/Why";
import { LanguageProvider } from "@/app/components/LanguageContext";
import { NavBar } from "@/app/layouts/main/navbar/Navbar";
import Footer from "@/app/layouts/main/footer/Footer";

const IndexView = ({ Component, pageProps }: any) => {
  return (
    <>
      <LanguageProvider>
        <NavBar {...pageProps} />
        <Hero {...pageProps} />
        <About {...pageProps} />
        <Projects {...pageProps} />
        <Services {...pageProps} />
        <Why {...pageProps} />
        <Contact {...pageProps} />
        <Footer {...pageProps} />
      </LanguageProvider>
    </>
  );
};

export default IndexView;
