import React from "react";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";
import { Box, Grid, Typography } from "@mui/material";
import {
  DirectionsRun,
  FitnessCenter,
  HealthAndSafety,
  SportsGymnastics,
} from "@mui/icons-material";

const WhyChoose = () => {
  const iconStyle = {
    color: "var(--primary-color)",
    fontSize: "6rem",
  };
  return (
    <Box
      sx={{
        background: "#3C0E78",
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomHeadingWrapper color={"white"}>Why Choose Us</CustomHeadingWrapper>
      <Grid
        container
        spacing={4}
        width={"100%"}
        mt={8}
        sx={{
          display: "flex",
          color: "white",
        }}
      >
        <Grid
          item
          size={3}
          sx={{
            justifyItems: "center",
            textAlign: "center",
          }}
        >
          <FitnessCenter sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            QUALITY EQUIPMENT
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Grid>
        <Grid item size={3} justifyItems={"center"} textAlign={"center"}>
          <HealthAndSafety sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            HEALTHY NUTRITION PLAN
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Grid>
        <Grid item size={3} justifyItems={"center"} textAlign={"center"}>
          <DirectionsRun sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            SHOWER SERVICE
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Grid>
        <Grid item size={3} justifyItems={"center"} textAlign={"center"}>
          <SportsGymnastics sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            UNIQUE TO YOUR NEEDS
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChoose;
