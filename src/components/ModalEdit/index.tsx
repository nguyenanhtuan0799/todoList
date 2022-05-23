import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Add, Close, PreviewOutlined } from "@mui/icons-material";
import "./modalAdd.scss";
import ButtonBtn from "../Button";
import { ButtonType } from "../../interface";

interface Style {
  marginRight: string;
}

const ModalEdit: React.FC = () => {
  const style: Style = {
    marginRight: "6px",
  };
  return (
    <div className="todo-modal card">
      <div className="todo-header">
        <p className="todo-title">Sua Công việc</p>
        <p className="todo-close">
          <Close />
        </p>
      </div>
      <div className="todo-body">
        <div className="name">
          <p>Tên : </p>
          <div style={{ width: "100%", margin: "10px" }}>
            <TextField
              size="small"
              style={{ width: "90%" }}
              id="outlined-basic"
              variant="outlined"
              label="Tên"
            />
          </div>
        </div>
        <div className="status">
          <p>Trạng Thái : </p>
          <div style={{ width: "100%", margin: "10px" }}>
            <FormControl fullWidth>
              <InputLabel
                style={{ width: "90%" }}
                id="demo-simple-select-label"
              >
                Trạng Thái
              </InputLabel>
              <Select
                size="small"
                style={{ width: "90%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Trạng Thái"
              >
                <MenuItem>Kích Hoạt</MenuItem>
                <MenuItem>Ẩn</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="todo-footer">
        <div>
          <ButtonBtn
            title="Luu Lai"
            icon={<Add style={style} />}
            color="orange"
          />
        </div>
        <div>
          <ButtonBtn
            title="Huy Bo"
            icon={<Close style={style} />}
            color="red"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
