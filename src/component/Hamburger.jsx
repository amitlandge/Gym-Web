import { Menu } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const Hamburger = ({ onOpenDrawerHandler }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "12rem",
        left: "5rem",
        zIndex: "9000",
      }}
    >
      <IconButton
        onClick={() => {
          onOpenDrawerHandler(true);
        }}
      >
        <Menu
          sx={{
            color: "var(--primary-color)",
            fontSize: "2rem",
            width: "5rem",
            height: "5rem",
            background: "rgb(60, 14, 120)",
            borderRadius: "50%",
            zIndex: "9000",
            padding: "1rem",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Hamburger;
