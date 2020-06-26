import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TripDetailsPage from "../TripDetailsPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "200px",
    border: "1px solid red",
  },
}));

const ProductsGrid = () => {
  const classes = useStyles();
  const [trips, setTrips] = useState([]);
  const [currentTripId, setCurrentTripId] = useState(0);
  const [tripDetailsUnmount, setTripDetailsUnmount] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getAllTrips();
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

  const goToTripDetails = () => {
    history.push(`/application-form`);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {trips.map((trip) => {
          return (
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                {trip.name}
                <p>{trip.durationInDays}</p>
                <p>{trip.planet}</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => goToTripDetails(trip.id)}
                >
                  Candidatar-se
                </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductsGrid;
