import React from "react";
import Chip from "@mui/material/Chip";
const TagTable: React.FC = () => {
  return (
    <div>
      <Chip style={{ minWidth: "120px" }} label="Kích Hoạt" color="error" />
      {/* <Chip
        style={{ minWidth: "120px" }}
        label="Ẩn"
        color="success"
      /> */}
    </div>
  );
};

export default TagTable;
