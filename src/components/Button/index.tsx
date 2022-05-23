import { Button } from "@mui/material";
import React from "react";
import { ButtonType } from "../../interface";
const ButtonBtn: React.FC<ButtonType> = ({ title, icon, color }) => {
  return (
    <div style={{ margin: "0 6px 0 0 " }}>
      <Button style={{ backgroundColor: color }} variant="contained">
        {icon} {title}
      </Button>
    </div>
  );
};

export default ButtonBtn;
