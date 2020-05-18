import React from 'react';
import styled from 'styled-components';

class Etapa1 extends React.Component {

    render() {

    return( 
        <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <p>1. Qual o seu nome?</p>
        <input></input>

        <p>2. Qual sua idade?</p>
        <input></input>

        <p>3. Qual seu email?</p>
        <input></input>

        <p>Qual a sua escolaridade?</p>
        <select name="escolaridade">
        <option value="1">Ensino médio incompleto</option>
        <option value="2">Ensino médio completo</option>
        <option value="3">Ensino superior incompleto</option>
        <option value="4">Ensino superior completo</option>
        </select>
        </div>
    )
    }
}

export default Etapa1
