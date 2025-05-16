import { createTheme } from "@mui/material";

export const customHeadingTheme = createTheme({
  typography: {
    fontFamily: "Dosis",

    h2: {
      display: "inline-block",
      fontWeight: "700",
      borderBottom: "7px solid var(--primary-color)",
      textAlign: "center",

      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "1rem",
      borderBottomRightRadius: "5px",
      borderBottomLeftRadius: "5px",
    },
  },
});
