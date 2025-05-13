import { Search } from "@mui/icons-material";
import { Box, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        margin: "0 auto",
        background: "rgb(248,188,26)",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100vw",
      }}
    >
      <ListItem
        sx={{
          display: "flex",
        }}
      >
        <ListItem>
          <NavLink>Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink>About</NavLink>
        </ListItem>
        <ListItem>
          <NavLink>Services</NavLink>
        </ListItem>
        <ListItem>
          <NavLink>Contact Us</NavLink>
        </ListItem>
        <ListItem>
          <NavLink>Login</NavLink>
        </ListItem>
        <ListItem>
          <Search />
        </ListItem>
      </ListItem>
    </Box>
  );
};

export default Navbar;
