import { Box, Grid, Typography } from "@mui/material";

import imageResult from "../assets/images/result-img.jpg";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";
import CustomButtom from "../UI/CustomButtom";
const Section = () => {
  return (
    <Box
      sx={{
        color: "white !important",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          flex: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
          },
        }}
      >
        <img src={imageResult} height={"100%"} width={"100%"} alt="secImage" />
      </Box>

      <Box
        padding={"10rem 3rem"}
        sx={{
          bgcolor: "rgb(60, 14, 120)",
          flex: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
          },
          textAlign: "center",
        }}
      >
        <CustomHeadingWrapper color={"white"}>
          BUILT TO BRING BEST RESULTS
        </CustomHeadingWrapper>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </Typography>
        <Box>
          <CustomButtom
            title={"Get a quote"}
            customStyle={{
              color: "white",
              marginTop: "1rem",
              background: "var(--primary-color)",

              "&:hover": {
                background: "transparent",
                border: "1px solid white",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
