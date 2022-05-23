import React from "react";
import "./Sort.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ButtonBtn from "../Button";

const Sort: React.FC = () => {
  return (
    <div className="dropdown ">
      <ButtonBtn
        title="Sắp Xếp"
        icon={<ArrowDropDownIcon style={{ transform: "translateY(-2px)" }} />}
        color="blue"
      />
      <div className="dropdown-content card">
        <div className="item">A-Z</div>
        <div className="item">Xuống Trên</div>
      </div>
    </div>
  );
};

export default Sort;
