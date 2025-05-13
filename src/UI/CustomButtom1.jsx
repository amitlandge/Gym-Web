import { Button } from "@mui/material";

const CustomButtom1 = ({ title }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "black",
        fontSize: "1.6rem",
        textTransform: "capitalize",
        border: "1px solid transparent",
        padding: "0.5rem 3rem",
        borderRadius: "0px",
        fontWeight: "500",
        background: "white",

        "&:hover": {
          background: "transparent",
          border: "1px solid white",
          color: "white",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButtom1;
