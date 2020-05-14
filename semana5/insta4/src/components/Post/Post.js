import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeFavorito from "../../img/bookmark-selected.svg";
import iconeNaoFavorito from "../../img/bookmark-unselected.svg";

class Post extends React.Component {
  state = {
    curtido: false,
    favoritado: false,
    numeroFavoritos: 0,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
  };

  onClickCurtida = () => {
    console.log("Curtiu!");

    if (this.state.curtido === true) {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1,
      });
    }

    if (this.state.curtido === false) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1,
      });
    }
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
      <div className={"post-container"}>
        <div className={"post-header"}>
          <img
            className={"user-photo"}
            src={this.props.fotoUsuario}
            alt={"Imagem do usuario"}
          />
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img
          className={"post-photo"}
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

        <div className={"post-footer"}>
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
        </div>
        {componenteComentario}
      </div>
    );
  }
}

export default Post