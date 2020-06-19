import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Layouts/Home/Home";
import UsersList from "./Components/Layouts/UsersList/UsersList";

function App() {
  const [currentPage, setPage] = useState("home");
  const [theme, setTheme] = useState("light");

  function changePage() {
    if (currentPage === "home") {
      setPage("usersList");
    } else if (currentPage === "usersList") {
      setPage("home");
    }
  }

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  function renderPage() {
    if (currentPage === "home") {
      return (
        <Home
          changePage={changePage}
          newTheme={toggleTheme}
          currentTheme={theme}
        />
      );
    } else if (currentPage === "usersList") {
      return <UsersList changePage={changePage} currentTheme={theme} />;
    }
  }

  return <div className="App">{renderPage()}</div>;
}

export default App;
