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
import AppBar from "../components/Header/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AppBar />
          <HomePage />
        </Route>
        <Route exact path="/application-form/:id">
          <AppBar />
          <ApplyToTripPage />
        </Route>
        <Route exact path="/login">
          <AppBar />
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <AppBar />
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <AppBar />
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details/:id">
          <AppBar />
          <TripDetailsPage />
        </Route>
        <Route exact path="/admin">
          <AppBar />
          <AdminHomePage />
        </Route>
        <Route exact path="/candidates">
          <AppBar />
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
