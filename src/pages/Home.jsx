import React, { Fragment } from "react";
import Hero from "../component/Hero";
import About from "./About.jsx";
import Services from "./Services.jsx";
import WhyChoose from "./WhyChoose.jsx";
import ReviewPage from "./ReviewPage.jsx";
import Section from "./Section.jsx";
import GetInTouch from "./GetInTouch.jsx";
import { Box, Grid } from "@mui/material";

const Home = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={12}>
          <Hero />
        </Grid>
        <Grid item lg={12}>
          <About />
        </Grid>
        <Grid item lg={12}>
          <Services />
        </Grid>
        <Grid item lg={12}>
          <WhyChoose />
        </Grid>
        <Grid item lg={12}>
          <ReviewPage />
        </Grid>
        <Grid item lg={12}>
          <Section />
        </Grid>

        <GetInTouch />
      </Grid>
    </Fragment>
  );
};

export default Home;
