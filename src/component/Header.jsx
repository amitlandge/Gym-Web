import { Box, ListItem, Typography } from "@mui/material";

import LogoImage from "../assets/images/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
const style = {
  display: "flex",
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        padding: "1rem",
      }}
    >
      <ListItem sx={{ ...style }}>
        <img src={LogoImage} alt="logo" />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
          }}
        >
          G-MAX
        </Typography>
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
