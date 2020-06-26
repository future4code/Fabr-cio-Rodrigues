import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import axios from "axios";

function TripDetailsPage(props) {
  const tripId = "1eW09MsidYoNyivFdClS";

  const [tripDetails, setTripDetails] = useState([]);
  console.log(tripDetails);
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricio-rodrigues-mello/trip/${tripId}`,
        axiosConfig
      )
      .then((response) => {
        setTripDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

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
            Detalhes da viagem
          </Typography>

          <Button variant="contained" color="primary">
            Quero me inscrever!
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default TripDetailsPage;
