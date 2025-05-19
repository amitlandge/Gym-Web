import React, { Fragment } from "react";
import Hero from "../component/Hero";
import About from "./About.jsx";
import Services from "./Services.jsx";
import WhyChoose from "./WhyChoose.jsx";
import ReviewPage from "./ReviewPage.jsx";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <ReviewPage />
    </Fragment>
  );
};

export default Home;
