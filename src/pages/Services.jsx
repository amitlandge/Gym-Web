import { Box, Grid, Typography } from "@mui/material";

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <CustomHeadingWrapper>Our Services</CustomHeadingWrapper>
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "2rem",
          padding: "10rem",
        }}
      >
        {imageData.map((item, index) => {
          return (
            <Box
              key={index}
              height={"30rem"}
              sx={{
                flex: {
                  xs: "90%",
                  sm: "80%",
                  md: "45%",
                  lg: "45%",
                },
              }}
            >
              <Box
                sx={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  height: "100%",
                  padding: "1rem",
                  color: "#fff",
                  transition: "all 1s ease-in-out",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundImage: `linear-gradient(rgba(248, 188, 26, 0.4), rgba(248, 188, 26, 0.4)), url(${item.url})`,
                    alignItems: "center",
                    justifyContent: "center",
                  },
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
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Services;
