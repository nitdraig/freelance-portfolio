import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/services";
import Why from "./components/Why";

const IndexView = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Why />
      <Contact />
    </>
  );
};

export default IndexView;
