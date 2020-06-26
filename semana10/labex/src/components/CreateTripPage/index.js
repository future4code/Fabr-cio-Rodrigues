import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";

function CreateTripPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ width: "90vw" }}>
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "60vh",
            marginTop: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h1">
            Criar nova viagem:
          </Typography>
          <Input placeholder="Nome:"></Input>
          <Input placeholder="Planeta:"></Input>
          <Input placeholder="Data:"></Input>
          <Input placeholder="Descrição:"></Input>
          <Input placeholder="Duração em dias:"></Input>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default CreateTripPage;
