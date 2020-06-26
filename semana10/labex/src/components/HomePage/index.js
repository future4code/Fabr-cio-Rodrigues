import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const enterAsCandidate = () => {
    history.push("/trips/list");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ width: "90vw" }}>
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "70vh",
            marginTop: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            Entrar como:
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "50%", height: "10%" }}
            onClick={enterAsCandidate}
          >
            Usuário
          </Button>
          <Typography variant="h5" component="h1">
            ou
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "50%", height: "10%" }}
            onClick={goToLoginPage}
          >
            Administrador
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;
