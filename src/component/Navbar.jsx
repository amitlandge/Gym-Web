import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Services", "Contact"];

const Navbar = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      <Drawer
        // anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          zIndex: "10000",
          width: "100%",
        }}
      >
        <Box
          width={"100vw"}
          height={"100vh"}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            background: "rgb(60, 14, 120)",
            color: "white",
          }}
        >
          <List
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {navItems.map((text) => (
              <ListItem key={text}>
                <Link
                  style={{
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  to={`/${text.toLowerCase()}`}
                >
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
