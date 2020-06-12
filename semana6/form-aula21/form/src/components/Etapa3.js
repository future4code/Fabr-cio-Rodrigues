import React from 'react';
import styled from 'styled-components';

class Etapa3 extends React.Component {
    render() {

        return( 
            <div>
            <h1>ETAPA - INFORMAÇÕES GERAIS DE ENSINO</h1>
    
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input></input>
    
            <p>6. Você fez algum curso complementar?</p>
            <select name="curso">
            <option value="1">Nenhum</option>
            <option value="2">Curso técnico</option>
            <option value="3">Curso de línguas (inglês, espanhol, etc)</option>
            </select>
            </div>
        )
        }
}

export default Etapa3
