import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/200/150?a=1",
      },
      {
        nomeUsuario: "soter",
        fotoUsuario: "https://picsum.photos/50/50?a=2",
        fotoPost: "https://picsum.photos/200/150?a=2",
      },
      {
        nomeUsuario: "darvas",
        fotoUsuario: "https://picsum.photos/50/50?a=3",
        fotoPost: "https://picsum.photos/200/150?a=3",
      },
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novosPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novosPosts });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div>
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        </div>
      );
    });

    return (
      <div className={"app-container"}>
        <div>
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputNomeUsuario}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome:"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFotoUsuario}
            // E a função também é outra
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da foto de perfil:"}
          />
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputFotoPost}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputFotoPost}
            placeholder={"URL da foto a ser postada:"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}


export default App;
