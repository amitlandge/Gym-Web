import { Box, Grid, Typography } from "@mui/material";

import imageResult from "../assets/images/result-img.jpg";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";
import CustomButtom from "../UI/CustomButtom";
const Section = () => {
  return (
    <Box
      sx={{
        height: "120vh",
      }}
    >
      <Grid
        container
        height={"60vh !important"}
        sx={{
          color: "white !important",
        }}
      >
        <Grid item size={6}>
          <Box height={"100%"}>
            <img src={imageResult} alt="secImage" />
          </Box>
        </Grid>
        <Grid item size={6} bgcolor={"#3C0E78"}>
          <Box width={"60%"} padding={"10rem 3rem"}>
            <CustomHeadingWrapper color={"white"}>
              BUILT TO BRING BEST RESULTS
            </CustomHeadingWrapper>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
