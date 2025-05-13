import { Button } from "@mui/material";

const CustomButtom = ({ title }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "white",
        fontSize: "1.6rem",
        textTransform: "capitalize",
        border: "1px solid transparent",
        padding: "0.5rem 3rem",
        borderRadius: "0px",
        fontWeight: "500",
        background: "rgb(248,188,26)",

        "&:hover": {
          background: "transparent",
          border: "1px solid white",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButtom;
