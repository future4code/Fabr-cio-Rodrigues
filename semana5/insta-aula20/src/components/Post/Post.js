import React from "react";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import iconeFavorito from "../../img/bookmark-selected.svg";
import iconeNaoFavorito from "../../img/bookmark-unselected.svg";
import iconeCompartilhar from "../../img/share.svg";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    favoritado: false,
    numeroFavoritos: 0,
    numeroCurtidas: 0,
    comentando: false,
    compartilhando: false,
    numeroComentarios: 0,
  };

  onClickCurtida = () => {
    let novoNumeroCurtidas;

    if (this.state.curtido) {
      novoNumeroCurtidas = this.state.numeroCurtidas - 1;
    } else {
      novoNumeroCurtidas = this.state.numeroCurtidas + 1;
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: novoNumeroCurtidas,
    });
  };

  onClickFavorito = () => {
    console.log("Favoritou!");

    if (this.state.favoritado === true) {
      this.setState({
        favoritado: false,
        numeroFavoritos: this.state.numeroFavoritos - 1,
      });
    }

    if (this.state.favoritado === false) {
      this.setState({
        favoritado: true,
        numeroFavoritos: this.state.numeroFavoritos + 1,
      });
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando,
    });
    alert("Você deseja mesmo compartilhar?");
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;
    let iconeFavoritado;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    if (this.state.favoritado) {
      iconeFavoritado = iconeFavorito;
    } else {
      iconeFavoritado = iconeNaoFavorito;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeComContador
            icone={iconeFavoritado}
            onClickIcone={this.onClickFavorito}
            valorContador={this.state.numeroFavoritos}
          />

          <IconeComContador
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
          />
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
