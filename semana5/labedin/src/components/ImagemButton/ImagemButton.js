import React from 'react';
import './ImagemButton.css'


function ImagemButton(props) {
    return (
      <a href={props.url}>
        <div className="image-button-container">
          <img src={props.imagem} alt=""/>
          <p>{props.texto}</p>
          <p></p>
        </div>
      </a>
    );
}

export default ImagemButton;