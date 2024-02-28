import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/services";

const IndexView = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};

export default IndexView;
