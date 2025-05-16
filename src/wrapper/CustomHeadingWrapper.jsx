import { ThemeProvider } from "@emotion/react";

import { customHeadingTheme } from "../style/customHeadingStyle.js";
import { Typography } from "@mui/material";

const CustomHeadingWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={customHeadingTheme}>
      <Typography variant="h2">{children}</Typography>
    </ThemeProvider>
  );
};

export default CustomHeadingWrapper;
