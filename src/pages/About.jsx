import { Box, Typography } from "@mui/material";

import aboutImage from "../assets/images/about-img.png";
import CustomButtom from "../UI/CustomButtom";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";

const About = () => {
  return (
    <Box
      className="flex-center"
      sx={{
        flexDirection: "column",
        textAlign: "center",
        gap: "4rem",
        margin: "0% auto",
        color: "var(--secondary-color)",
        background: "#F8F8F8",
        padding: "5rem",
      }}
    >
      {/* <Typography className="pageHeading">About G-Max</Typography> */}
      <CustomHeadingWrapper>About G-Max</CustomHeadingWrapper>
      <img src={aboutImage} alt="aboutImage" />
      <Typography variant="body" sx={{ width: "70%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis
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
