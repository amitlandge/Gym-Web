import { Box, TextField } from "@mui/material";
import React from "react";
import CustomButtom from "../UI/CustomButtom";
import CustomHeadingWrapper from "../wrapper/CustomHeadingWrapper";

const GetInTouch = () => {
  return (
    <Box
      sx={{
        width: {
          sm: "95%",
          lg: "80%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10rem",
        margin: "0 auto",
        gap: "3rem",
      }}
    >
      <Box>
        <CustomHeadingWrapper>Get In Touch</CustomHeadingWrapper>
      </Box>
      <TextField
        fullWidth
        id="standard-basic"
        label="Name"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="Email"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="Phone Number"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="Message"
        variant="standard"
      />
      <Box>
        <CustomButtom
          title={"Send"}
          customStyle={{
            color: "white",

            background: "var(--primary-color)",

            "&:hover": {
              background: "transparent",
              border: "1px solid black",
              color: "black",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default GetInTouch;
