import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import ProximaEtapaBTN from './components/ProximaEtapaBTN'

class App extends React.Component {
  state = {
    etapa: 1,
  }

    renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return  <div><Etapa1 /><ProximaEtapaBTN avancar={this.proximaEtapa} /></div> 
        case 2:
          return <div><Etapa2 /><ProximaEtapaBTN avancar={this.proximaEtapa}/></div> 
        case 3:
          return <div><Etapa3 /><ProximaEtapaBTN avancar={this.proximaEtapa}/></div> 
        case 4:
          return <Final />
        
        default: return;
      }
    }

    proximaEtapa = () => {
      this.setState({ etapa: this.state.etapa + 1})
    }

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
      </div>
    );
  }
}

export default App;
