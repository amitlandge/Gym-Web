import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#111", color: "white", mt: 5 }}>
      {/* Newsletter Section */}
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h3" gutterBottom>
          OUR NEWSLETTER
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter your email"
            sx={{
              backgroundColor: "white",
              borderRadius: "0",
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 3,
              backgroundColor: "#f4b603",
              color: "#000",
              "&:hover": { backgroundColor: "#dba400" },
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Box>

      {/* Footer Links Section */}
      <Box px={{ xs: 4, md: 10 }} py={6}>
        {/* About */}
        <Box md={3}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About G-Max
          </Typography>
          <Typography variant="body" color="gray">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation u
          </Typography>
        </Box>

        {/* Menus */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "2rem",
            gap: "2rem",
            "@media (max-width: 600px)": {
              flexDirection: "column", // for screens smaller than 1200px
            },
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Menus
            </Typography>
            <Typography variant="h5">Home</Typography>
            <Typography variant="h5">About</Typography>
            <Typography variant="h5">Services</Typography>
            <Typography variant="h5">Contact Us</Typography>
            <Typography variant="h5">Login</Typography>
          </Box>

          {/* Useful Links */}
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Useful Links
            </Typography>
            <Typography variant="h5">Adipiscing</Typography>
            <Typography variant="h5">Elit, sed</Typography>
            <Typography variant="h5">do Eiusmod</Typography>
            <Typography variant="h5">Tempor</Typography>
            <Typography variant="h5">incididunt</Typography>
          </Box>

          {/* Contact Us */}
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="h5">No.123, loram ipsum</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="h5">+01 12345678901</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="h5">demo123@gmail.com</Typography>
            </Box>
            {/* Social Icons */}
            <Box>
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Footer */}
      <Box textAlign="center" py={2} sx={{ backgroundColor: "#0d0d0d" }}>
        <Typography variant="body">
          © 2025 All Rights Reserved. Design by Amit
        </Typography>
      </Box>
    </Box>
  );
}
