import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";
import pic1 from "../assets/images/s-1.jpg";
import pic2 from "../assets/images/s-2.jpg";
import pic3 from "../assets/images/s-3.jpg";
import pic4 from "../assets/images/s-4.jpg";
import pic5 from "../assets/images/s-5.jpg";
import pic6 from "../assets/images/s-6.jpg";
const imageData = [
  {
    name: "Crossfit Training",
    url: pic1,
  },
  {
    name: "Fitness",
    url: pic2,
  },
  {
    name: "Dynamic Strength Training",
    url: pic3,
  },
  {
    name: "Health",
    url: pic4,
  },
  {
    name: "Workout",
    url: pic5,
  },
  {
    name: "Strategies",
    url: pic6,
  },
];
const Services = () => {
  return (
    <Box
      className="flex-center"
      sx={{
        padding: "3rem",
        gap: "10rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomHeadingWrapper>Our Services</CustomHeadingWrapper>
      <Grid container spacing={3} alignItems={"stretch"}>
        {imageData.map((item) => {
          return (
            <Grid size={6} height={"30rem"}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1rem",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "white",
                    zIndex: "5000",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
