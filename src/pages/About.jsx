import { Box, Typography } from "@mui/material";

import aboutImage from "../assets/images/gmax.png";
import CustomButtom from "../UI/CustomButtom";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";

const About = () => {
  return (
    <Box
      className="flex-center"
      sx={{
        flexDirection: "column",
        textAlign: "center",
        gap: "2rem",
        margin: "0% auto",
        color: "var(--secondary-color)",
        background: "#F8F8F8",
        padding: "5rem",
      }}
    >
      {/* <Typography className="pageHeading">About G-Max</Typography> */}
      <Box>
        <CustomHeadingWrapper>About G-Max</CustomHeadingWrapper>
      </Box>
      <img src={aboutImage} alt="aboutImage" width={"30%"} />
      <Typography variant="body" sx={{ width: "70%" }}>
        Redefine your boundaries with G-Max. Whether you’re a beginner or a pro,
        our expert trainers, cutting-edge equipment, and motivating environment
        help you chase greatness daily
      </Typography>
      <CustomButtom
        title={"Read More"}
        customStyle={{
          color: "white",

          background: "var(--secondary-color)",

          "&:hover": {
            background: "transparent",
            border: "1px solid black",
            color: "black",
          },
        }}
      />
    </Box>
  );
};

export default About;
