import React from "react";
import { Add, AcUnit } from "@mui/icons-material";
import ButtonBtn from "../Button";
import "./actionForm.scss";
import Sort from "../Sort";
const ActionForm: React.FC = () => {
  return (
    <div className="action-form card">
      <div className="header">
        <div>
          <ButtonBtn title="Thêm Công Việc" icon={<Add />} color="blue" />
        </div>
        <div>
          <ButtonBtn title="Generate Data" icon={<AcUnit />} color="red" />
        </div>
        <div>
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default ActionForm;
