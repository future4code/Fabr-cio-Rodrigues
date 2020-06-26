import React from "react";
import AppBar from "./components/Header";
import HomePage from "./components/HomePage/";
import ListTripsPage from "./components/ListTripsPage/";
import TripDetailsPage from "./components/TripDetailsPage/";
import styled from "styled-components";
import "./App.css";
import Router from "./router/router";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Router />
    </div>
  );
}

export default App;
