import { Box, Typography } from "@mui/material";

const CustomHeadingWrapper = ({ children, color }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: color ? color : "#040000",
          textAlign: "center",
        }}
      >
        {children}
      </Typography>
      <Box
        width={50}
        height={5}
        bgcolor="var(--primary-color)"
        mx="auto"
        borderRadius={5}
        mb={2}
      />
    </Box>
  );
};

export default CustomHeadingWrapper;
