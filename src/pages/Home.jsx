import React, { Fragment } from "react";
import Hero from "../component/Hero";
import About from "./About.jsx";
import Services from "./Services.jsx";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
    </Fragment>
  );
};

export default Home;
