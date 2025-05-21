import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/images/slider-bg.jpg";
import CustomButtom from "../UI/CustomButtom";

import Navbar from "./Navbar";
const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        top: "0%",
        left: "0%",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundOrigin: "center",
          zIndex: "10",

          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          padding: "10rem",
        }}
      >
        <Box
          sx={{
            flex: "0.5",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            },
          }}
        ></Box>
        <Box
          sx={{
            flex: {
              sm: 1,
              lg: 0.5,
            },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "var(--primary-color)",
              fontSize: "3rem",
              fontWeight: "300",
            }}
          >
            Get Your Body
          </Typography>
          <Typography
            variant="h1"
            textTransform={"uppercase"}
            sx={{
              fontWeight: "600",
              color: "white",
            }}
          >
            Fitness Here
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.6rem",
              width: "90%",
              color: "white",
              fontWeight: "100",
            }}
            mb={2}
          >
            Welcome to G-Max — a fitness sanctuary where passion meets progress.
            Train with purpose, push your limits, and become the strongest
            version of yourself, inside and out.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <CustomButtom
              title={"Read More"}
              customStyle={{
                color: "white",

                background: "var(--primary-color)",

                "&:hover": {
                  background: "transparent",
                  border: "1px solid white",
                },
              }}
            />
            <CustomButtom
              title={"Get A Quote"}
              customStyle={{
                color: "black",

                background: "white",

                "&:hover": {
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Navbar />
    </Box>
  );
};

export default Hero;
