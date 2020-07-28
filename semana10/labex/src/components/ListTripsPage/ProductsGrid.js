import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "225px",
  },
}));

const ProductsGrid = (props) => {
  const { planetFilter, durationFilter } = props;
  const classes = useStyles();
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const getFilteredAndOrderedList = () => {
    return (
      trips.filter((trip) => trip.durationInDays > durationFilter) &&
      trips.filter((trip) => trip.planet.includes(planetFilter))
    );
  };

  useEffect(() => {
    getAllTrips();
    getFilteredAndOrderedList();
  });

  const getAllTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricio-rodrigues-mello/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const goToTripApplicationForm = (tripId) => {
    history.push(`/application-form/${tripId}`);
  };

  const filteredAndOrderedList = getFilteredAndOrderedList();

  return (
    <div className={classes.root}>
      <h2 style={{ textAlign: "left" }}>
        Quantidade de viagens encontradas: {filteredAndOrderedList.length}{" "}
      </h2>
      <Grid container spacing={3}>
        {filteredAndOrderedList.map((trip) => {
          return (
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <p style={{ fontWeight: "bold", color: "black" }}>
                  {trip.name}
                </p>
                <div
                  style={{
                    textAlign: "left",
                  }}
                >
                  <div>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <p>Planeta: {trip.planet}</p>

                    <p>Data: {trip.date}</p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => goToTripApplicationForm(trip.id)}
                    >
                      Candidatar-se
                    </Button>
                  </div>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductsGrid;
