import React from 'react';
import styled from 'styled-components';

class ProximaEtapaBTN extends React.Component {
    render() {

        return( 
            <div><button onClick={this.props.avancar}>Próxima etapa</button></div>
        )
        }
}

export default ProximaEtapaBTN