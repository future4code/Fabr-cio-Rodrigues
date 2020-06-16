import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Layouts/Home/Home";
import UsersList from "./Components/Layouts/UsersList/UsersList";

function App() {
  const [currentPage, setPage] = useState("home");

  function changePage() {
    if (currentPage === "home") {
      setPage("usersList");
    } else if (currentPage === "usersList") {
      setPage("home");
    }
  }

  function renderPage() {
    if (currentPage === "home") {
      return <Home changePage={changePage} />;
    } else if (currentPage === "usersList") {
      return <UsersList changePage={changePage} />;
    }
  }

  return <div className="App">{renderPage()}</div>;
}

export default App;
