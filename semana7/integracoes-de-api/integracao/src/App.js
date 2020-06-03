import React from "react";
import UsersList from "./components/UsersList";
import SignUp from "./components/SignUp";

export default class App extends React.Component {
  state = {
    currentPage: "signUp",
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "usersList" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Ir para cadastros</button>
        {this.state.currentPage === "signUp" ? <SignUp /> : <UsersList />}
      </div>
      /*Aqui eu originalmente usei if else, porém após o gabarito, achei mais
        conveniente usar o ternário mesmo.*/
    );
  }
}
