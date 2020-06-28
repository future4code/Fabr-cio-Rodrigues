import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

function AdminHomePage() {
  const history = useHistory();

  const createNewTrips = () => {
    history.push("/trips/create");
  };

  const handleCandidates = () => {
    history.push("/candidates");
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm" style={{ width: "90vw" }}>
        <Typography variant="h4" style={{ marginTop: "5%" }}>
          Bem-vindo, admin.
        </Typography>
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
          <Button
            variant="contained"
            color="primary"
            style={{ width: "50%", height: "10%" }}
            onClick={createNewTrips}
          >
            Criar viagem
          </Button>
          <Typography variant="h5" component="h1">
            ou
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "50%", height: "10%" }}
            onClick={handleCandidates}
          >
            Administrar candidatos
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default AdminHomePage;
