import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Modal from "../components/Modal";
import ModalEdit from "../components/ModalEdit";
import ActionForm from "../components/ActionForm";
import TableData from "../components/Table";
const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div style={{ borderBottom: "1px solid blue", width: "100%" }}>
            <h1
              style={{
                textAlign: "center",
                color: "blue",
                fontSize: "48px",
                textShadow:
                  "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
              }}
            >
              Quản Lý Công Việc
            </h1>
          </div>
        </Grid>
        <Grid item style={{ margin: "0 auto" }} xs={10} md={4}>
          <Modal />

          {/* <ModalEdit /> */}
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid item xs={12} md={12} style={{ zIndex: 99 }}>
            <ActionForm />
          </Grid>
          <Grid item xs={12} md={12}>
            <TableData />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
