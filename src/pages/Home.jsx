import React, { Fragment } from "react";
import Hero from "../component/Hero";
import About from "./About.jsx";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
};

export default Home;
