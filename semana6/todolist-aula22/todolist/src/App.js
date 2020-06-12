import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: 
      [
        {
          id: Date.now(),
          texto: 'Texto da tarefa',
          completa: false,
        }, 
      ],
      valorInputTarefa: '',
      filter: '',
      tarefaSelecionada: ''
    }

  componentDidUpdate() {
    const listaAtualizada = this.state.tarefas;

    localStorage.setItem("lista", JSON.stringify(listaAtualizada));
  };

  componentDidMount() {
    const listaNoLocalStorage = localStorage.getItem("lista");
    const tarefasObjeto = JSON.parse(listaNoLocalStorage)

    const tarefasAtualizadas = [tarefasObjeto, ...this.state.tarefas];

    this.setState({ tarefas: tarefasAtualizadas })
    console.log(tarefasObjeto)
  };

  onChangeInput = (event) => {
    this.setState({ valorInputTarefa: event.target.value });

  }

  criaTarefa = () => {
    if (this.state.valorInputTarefa !== "") {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.valorInputTarefa,
        completa: false,
      };

      const novasTarefas = [novaTarefa, ...this.state.tarefas];

      this.setState({ tarefas: novasTarefas })
      this.setState({ valorInputTarefa: "" })
   } else {
     alert("O espaço para adicionar uma tarefa não pode estar em branco!")
   }
}

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  }


  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.valorInputTarefa} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
