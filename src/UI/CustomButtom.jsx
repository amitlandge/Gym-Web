import { Button } from "@mui/material";

const CustomButtom = ({ title, customStyle }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        fontSize: "1.6rem",
        textTransform: "capitalize",
        border: "1px solid transparent",
        padding: "0.5rem 3rem",
        borderRadius: "0px",
        fontWeight: "500",
        ...customStyle,
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButtom;
