"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/services";
import Why from "./components/Why";
import { LanguageProvider } from "@/app/components/LanguageContext";
import { NavBar } from "@/app/layouts/main/navbar/Navbar";
import Footer from "@/app/layouts/main/footer/Footer";

const IndexView = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  }, []);

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
