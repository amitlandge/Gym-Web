import { Box, ListItem, Typography } from "@mui/material";

import LogoImage from "../assets/images/gmax.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Menu } from "@mui/icons-material";
const style = {
  display: "flex",
  flex: "15%",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
};
const iconStyle = {
  fontSize: "2.5rem",
  color: "var(--primary-color)",
};
const Header = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
        flexWrap: "wrap",

        padding: "1rem",
        position: "relative",
        top: "0",
      }}
    >
      <ListItem sx={{ ...style }}>
        <img src={LogoImage} alt="logo" width={"70rem"} />
      </ListItem>
      <ListItem sx={{ ...style }}>
        <LocationOnIcon style={{ ...iconStyle }} />
        <Typography variant="body">Location</Typography>
      </ListItem>
      <ListItem sx={{ ...style }}>
        <CallIcon style={{ ...iconStyle }} />
        <Typography variant="body">Call: +91 1234567890</Typography>
      </ListItem>
      <ListItem sx={{ ...style }}>
        <EmailIcon style={{ ...iconStyle }} />
        <Typography variant="body">gmaxfitness@gmail.com</Typography>
      </ListItem>
    </Box>
  );
};

export default Header;
