import React from "react";
import axios from "axios";
import styled from "styled-components";

const SignUpPage = styled.div`
  display: flex;
  margin: 0 auto;
  width: 25%;
  flex-direction: column;
  color: blue;
`;

const CreateUserButton = styled.button`
  background-color: #8719ba;
  cursor: pointer;
  border: none;
  color: white;
  padding: 15px 32px;
  display: inline-block;
  font-size: 16px;
`;

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleEmailChange = (event) => {
    const newEmailValue = event.target.value;

    this.setState({ email: newEmailValue });
  };

  createNewUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "fabricio-rodrigues-mello",
      },
    };

    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert("Usuário criado com sucesso!");
        this.setState({ name: "", email: "" });
      })
      .catch((e) => {
        console.log(e);
        alert("Erro ao criar o usuário.");
      });
  };

  render() {
    return (
      <SignUpPage>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <CreateUserButton onClick={this.createNewUser}>
          Criar Usuário
        </CreateUserButton>
      </SignUpPage>
    );
  }
}

export default SignUp;
