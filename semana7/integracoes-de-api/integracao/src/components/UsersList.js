import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "fabricio-rodrigues-mello",
  },
};

class UsersList extends React.Component {
  state = {
    usersList: [],
  };

  componentDidMount() {
    this.retrieveUsersList();
  }

  retrieveUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      });
  };

  handleUserDeletion = (userId) => {
    if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário deletado com sucesso!");
          this.retrieveUsersList();
        })
        .catch((e) => {
          alert("Erro ao deletar usuário.");
        });
    }
  };

  render() {
    return (
      <div>
        {this.state.usersList.length === 0 && <div>Carregando...</div>}
        {this.state.usersList.map((user) => {
          return (
            <li>
              {user.name}
              <DeleteButton onClick={() => this.handleUserDeletion(user.id)}>
                <span> </span>X
              </DeleteButton>
            </li>
          );
        })}
      </div>
    );
  }
}

export default UsersList;
