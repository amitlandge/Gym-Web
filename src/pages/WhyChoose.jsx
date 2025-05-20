import React from "react";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";
import { Box, Grid, Stack, Typography } from "@mui/material";
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
  const customBoxStyle = {
    flex: {
      xs: "90%",
      sm: "40%",
      md: "40%",
      lg: "20%",
    },
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    gap: "1rem",
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
      <Box
        width={"100%"}
        mt={8}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          color: "white",
          gap: "4rem",
        }}
      >
        <Stack sx={{ ...customBoxStyle }}>
          <FitnessCenter sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            QUALITY EQUIPMENT
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Stack>
        <Stack sx={{ ...customBoxStyle }}>
          <HealthAndSafety sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            HEALTHY NUTRITION PLAN
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Stack>
        <Stack sx={{ ...customBoxStyle }}>
          <DirectionsRun sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            SHOWER SERVICE
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Stack>
        <Stack sx={{ ...customBoxStyle }}>
          <SportsGymnastics sx={{ ...iconStyle }} />
          <Typography variant="h4" gutterBottom fontWeight={"600"}>
            UNIQUE TO YOUR NEEDS
          </Typography>
          <Typography variant="body">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default WhyChoose;
