import React from "react";
import ButtonBtn from "../Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Edit, DeleteOutline } from "@mui/icons-material";
import "./table.scss";
import TagTable from "../Tag";
interface DataFirst {
  id: number;
  name: string;
  status: boolean;
  date: string;
}
const TableData: React.FC = () => {
  let filterData: Array<DataFirst> = [
    {
      id: 1,
      name: "asd",
      status: true,
      date: "12/05/2022",
    },
    {
      id: 1,
      name: "asd",
      status: true,
      date: "12/05/2022",
    },
    {
      id: 1,
      name: "asd",
      status: true,
      date: "12/05/2022",
    },
  ];
  return (
    <div
      className="table card"
      style={{
        borderRadius: "6px",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 100 }}>STT</TableCell>
              <TableCell align="left">Tên</TableCell>
              <TableCell align="left">Trạng Thái</TableCell>
              <TableCell align="left">Hành Động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                style={{ width: 100 }}
                component="th"
                scope="row"
              ></TableCell>
              <TableCell style={{ width: 300 }} align="left">
                <div style={{ width: "100%" }}>
                  <TextField
                    size="small"
                    style={{ width: "90%" }}
                    id="outlined-basic"
                    label="Tên"
                    variant="outlined"
                  />
                </div>
              </TableCell>
              <TableCell align="left">
                <div style={{ width: "100%" }}>
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
                      <MenuItem value={0}>Tất Cả</MenuItem>
                      <MenuItem value="active">Kích Hoạt</MenuItem>
                      <MenuItem value="hide">Ẩn</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
            {filterData.map((row, i) => {
              return (
                <TableRow
                  key={i}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell style={{ width: 100 }} component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell style={{ width: 300 }} align="left">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ minWidth: 160 }} align="left">
                    <TagTable />
                  </TableCell>
                  <TableCell align="left">
                    <div className="table-action">
                      <div>
                        <ButtonBtn title="Sua" icon={<Edit />} color="orange" />
                      </div>
                      <div>
                        <ButtonBtn
                          title="Xoa"
                          icon={<DeleteOutline />}
                          color="red"
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
