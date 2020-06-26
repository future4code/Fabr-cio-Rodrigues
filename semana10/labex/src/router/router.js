import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// pages
import HomePage from "../components/HomePage";
import CreateTripPage from "../components/CreateTripPage";
import ListTripsPage from "../components/ListTripsPage";
import LoginPage from "../components/LoginPage";
import TripDetailsPage from "../components/TripDetailsPage";
import ApplyToTripPage from "../components/ApplyToTripPage";
import AdminHomePage from "../components/AdminHomePage";
import CandidatesPage from "../components/CandidatesPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <ApplyToTripPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details/:id">
          <TripDetailsPage />
        </Route>
        <Route exact path="/admin">
          <AdminHomePage />
        </Route>
        <Route exact path="/candidates">
          <CandidatesPage />
        </Route>

        <Route path="*">
          <h1>Ixi, deu ruim rapaz... (404)</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
