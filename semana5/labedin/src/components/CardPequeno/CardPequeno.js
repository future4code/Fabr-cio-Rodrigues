import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <img src={props.imagem} alt="" />
      <div>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
