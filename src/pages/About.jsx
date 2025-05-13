import { Box, Typography } from "@mui/material";

import aboutImage from "../assets/images/about-img.png";
import CustomButtom from "../UI/CustomButtom";
const About = () => {
  return (
    <Box
      className="flex-center"
      sx={{
        flexDirection: "column",
        textAlign: "center",
        gap: "4rem",
        margin: "5% auto",
        color: "var(--secondary-color)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Dosis , sans-serif",
          fontWeight: "700",
          borderBottom: "7px solid var(--primary-color)",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          paddingBottom: "1rem",
          //   borderWidth: "5px",
        }}
      >
        {" "}
        About G-Max
      </Typography>
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
