import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../Hero";
import About from "../About";
import Projects from "../Projects";
import Services from "../services";
import Why from "../Why";
import Contact from "../Contact";

const App = ({ pageProps }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero {...pageProps} />
      <About {...pageProps} />
      <Projects {...pageProps} />
      <Services {...pageProps} />
      <Why {...pageProps} />
      <Contact {...pageProps} />
    </>
  );
};

export default App;
