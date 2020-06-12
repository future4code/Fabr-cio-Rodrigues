import React from "react";
import styled from "styled-components";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import pokeMusic from "./audios/pokemonAudio.mp3";

const PokemonContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PokemonHeader = styled.div`
  background-image: url("https://free4kwallpapers.com/uploads/originals/2019/08/21/simple-sunset-wallpaper.jpg");
  font-family: sans-serif;
  text-align: center;
  color: white;
`;

const MusicContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const PokemonMainContainer = styled.div`
  height: 79.1vh;
  display: flex;
  flex-direction: column;
`;

const PokeImage = styled.img`
  width: 10vw;
  height: 10vw;
`;

const FightButton = styled.button`
  background-color: red;
  text-align: center;
  margin: 0 auto;
  border: none;
  color: white;
  padding: 15px 20px;
  font-size: 16px;
  width: 6.3%;
`;

const LangButton = styled.button`
  background-color: red;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  width: 20%;
  margin-bottom: 10px;
`;

export class App extends React.Component {
  state = {
    pokemons: [],
    pokemonOneType: "pokémon um",
    pokemonTwoType: "pokémon dois",
    pokeImageOne: "",
    pokeImageTwo: "",
    langSelected: "portuguese",
  };

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        this.setState({ pokemons: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchPokemonOne = (event) => {
    const pokeName = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        this.setState({ pokemonOneType: res.data.types[0].type.name });
        this.setState({ pokeImageOne: res.data.sprites.front_default });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchPokemonTwo = (event) => {
    const pokeName = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        this.setState({ pokemonTwoType: res.data.types[0].type.name });
        this.setState({ pokeImageTwo: res.data.sprites.front_default });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  pokemonFight = () => {
    if (
      this.state.pokemonOneType === "water" &&
      this.state.pokemonTwoType === "fire"
    ) {
      alert("O pokémon um venceu!");
    } else if (
      this.state.pokemonOneType === "fire" &&
      this.state.pokemonTwoType === "water"
    ) {
      alert("O pokémon dois venceu!");
    } else if (
      this.state.pokemonOneType === "water" &&
      this.state.pokemonTwoType === "grass"
    ) {
      alert("O pokémon um venceu!");
    } else if (
      this.state.pokemonOneType === "grass" &&
      this.state.pokemonTwoType === "water"
    ) {
      alert("O pokémon dois venceu!");
    } else if (
      this.state.pokemonOneType === "fire" &&
      this.state.pokemonTwoType === "grass"
    ) {
      alert("O pokémon um venceu!");
    } else if (
      this.state.pokemonOneType === "grass" &&
      this.state.pokemonTwoType === "fire"
    ) {
      alert("O pokémon dois venceu!");
    } else if (
      this.state.pokemonOneType === "electric" &&
      this.state.pokemonTwoType === "water"
    ) {
      alert("O pokémon um venceu!");
    } else if (
      this.state.pokemonOneType === "water" &&
      this.state.pokemonTwoType === "electric"
    ) {
      alert("O pokémon dois venceu!");
    } else if (
      this.state.pokemonOneType === "psychic" &&
      this.state.pokemonTwoType !== "psychic"
    ) {
      alert("O pokémon um venceu!");
    } else if (
      this.state.pokemonTwoType === "psychic" &&
      this.state.pokemonOneType !== "psychic"
    ) {
      alert("O pokémon dois venceu!");
    } else if (this.state.pokemonOneType === this.state.pokemonTwoType) {
      alert("É um empate!");
    } else {
      alert(
        "Um ou dois dos pokémons selecionados não são dos tipos especificados!\nEscolha pokémons de água, fogo ou grama."
      );
    }
  };

  pokemonFightEnglish = () => {
    if (
      this.state.pokemonOneType === "water" &&
      this.state.pokemonTwoType === "fire"
    ) {
      alert("The first pokémon won!");
    } else if (
      this.state.pokemonOneType === "fire" &&
      this.state.pokemonTwoType === "water"
    ) {
      alert("The second pokémon won!");
    } else if (
      this.state.pokemonOneType === "water" &&
      this.state.pokemonTwoType === "grass"
    ) {
      alert("The first pokémon won!");
    } else if (
      this.state.pokemonOneType === "grass" &&
      this.state.pokemonTwoType === "water"
    ) {
      alert("The second pokémon won!");
    } else if (
      this.state.pokemonOneType === "fire" &&
      this.state.pokemonTwoType === "grass"
    ) {
      alert("The first pokémon won!");
    } else if (
      this.state.pokemonOneType === "grass" &&
      this.state.pokemonTwoType === "fire"
    ) {
      alert("The second pokémon won!");
    } else if (
      this.state.pokemonOneType === "electric" &&
      this.state.pokemonTwoType === "water"
    ) {
      alert("The first pokémon won!");
    } else if (
      this.state.pokemonOneType === "water" &&
      this.state.pokemonTwoType === "electric"
    ) {
      alert("The second pokémon won!");
    } else if (
      this.state.pokemonOneType === "psychic" &&
      this.state.pokemonTwoType !== "psychic"
    ) {
      alert("The first pokémon won!");
    } else if (
      this.state.pokemonTwoType === "psychic" &&
      this.state.pokemonOneType !== "psychic"
    ) {
      alert("The second pokémon won!");
    } else if (this.state.pokemonOneType === this.state.pokemonTwoType) {
      alert("It's a draw!");
    } else {
      alert(
        "One or two of the selected pokémons aren't from the specified types!\nChoose a water, fire or grass pokémon."
      );
    }
  };

  changeLangToEnglish = () => {
    this.setState({ langSelected: "english" });
  };

  changeLangToPortuguese = () => {
    this.setState({ langSelected: "portuguese" });
  };

  render() {
    const imageOne = this.state.pokeImageOne ? (
      <PokeImage src={this.state.pokeImageOne} alt="pokemon" />
    ) : (
      <div />
    );

    const imageTwo = this.state.pokeImageTwo ? (
      <PokeImage src={this.state.pokeImageTwo} alt="pokemon" />
    ) : (
      <div />
    );

    if (this.state.langSelected === "portuguese") {
      return (
        <PokemonHeader>
          <LangButton onClick={this.changeLangToEnglish}>
            Change language to English
          </LangButton>
          <MusicContainer>
            <ReactAudioPlayer
              src={pokeMusic}
              autoPlay={true}
              loop={true}
              controls
              volume={0.3}
            />
          </MusicContainer>
          <h2>
            Selecione dois pokémons do tipo água, fogo ou grama para lutar!
          </h2>
          <PokemonMainContainer>
            <PokemonContainer>
              <select onChange={this.fetchPokemonOne}>
                <option value="" />
                {this.state.pokemons.map((pokemon) => {
                  return <option value={pokemon.name}>{pokemon.name}</option>;
                })}
              </select>
              <div>{imageOne}</div>

              <select onChange={this.fetchPokemonTwo}>
                <option value="" />
                {this.state.pokemons.map((pokemon) => {
                  return <option value={pokemon.name}>{pokemon.name}</option>;
                })}
              </select>
              <div>{imageTwo}</div>
            </PokemonContainer>
            <FightButton onClick={this.pokemonFight}>Lutar!</FightButton>
          </PokemonMainContainer>
        </PokemonHeader>
      );
    } else if (this.state.langSelected === "english") {
      return (
        <PokemonHeader>
          <LangButton onClick={this.changeLangToPortuguese}>
            Mudar a língua para português
          </LangButton>
          <MusicContainer>
            <ReactAudioPlayer
              src={pokeMusic}
              controls
              autoPlay={true}
              loop={true}
              volume={0.3}
            />
          </MusicContainer>
          <h2>Select two pokémons of water, fire or grass types to fight!</h2>
          <PokemonMainContainer>
            <PokemonContainer>
              <select onChange={this.fetchPokemonOne}>
                <option value="" />
                {this.state.pokemons.map((pokemon) => {
                  return <option value={pokemon.name}>{pokemon.name}</option>;
                })}
              </select>
              <div>{imageOne}</div>

              <select onChange={this.fetchPokemonTwo}>
                <option value="" />
                {this.state.pokemons.map((pokemon) => {
                  return <option value={pokemon.name}>{pokemon.name}</option>;
                })}
              </select>
              <div>{imageTwo}</div>
            </PokemonContainer>
            <FightButton onClick={this.pokemonFightEnglish}>Fight!</FightButton>
          </PokemonMainContainer>
        </PokemonHeader>
      );
    }
  }
}

export default App;
