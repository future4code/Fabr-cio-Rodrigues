import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import CreatePlaylistDark from "./components/CreatePlaylistDark";
import Playlists from "./components/Playlists";
import PlaylistsDark from "./components/PlaylistsDark";
import styled from "styled-components";

const Header = styled.header`
  background-color: #f9b24e;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HeaderDark = styled.header`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderItem = styled.a`
  text-decoration: none;
  color: white;
`;

const HeaderListItem = styled.li`
  text-decoration: none;
  color: white;
  margin: 0px 10px;
  padding: 0px;
  list-style: none;
  font-size: 1.2rem;
  font-family: Arial;
`;

const HeaderButton = styled.button`
  background-color: #f9b24e;
  color: white;
  height: 5vh;
  font-size: 16px;
  margin-top: 1px;
  border: 1px solid white;

  &:hover {
    transition-duration: 300ms;
    background-color: white;
    color: black;
  }
`;

const HeaderButtonDark = styled.button`
  background-color: black;
  color: white;
  height: 5vh;
  font-size: 16px;
  margin-top: 1px;
  border: 1px solid white;

  &:hover {
    transition-duration: 300ms;
    background-color: white;
    color: black;
  }
`;

const Logo = styled.a`
  text-decoration: none;
  color: white;
  font-size: 32px;
`;

class App extends React.Component {
  state = {
    currentPage: "playlists",
    darkMode: false,
  };

  changePage = () => {
    if (this.state.currentPage === "playlists") {
      this.setState({ currentPage: "createPlaylist" });
    } else {
      this.setState({ currentPage: "playlists" });
    }
  };

  darkMode = () => {
    if (this.state.darkMode === false) {
      this.setState({ darkMode: true });
    } else {
      this.setState({ darkMode: false });
    }
  };

  render() {
    if (this.state.darkMode === false) {
      return (
        <div>
          {this.state.currentPage === "playlists" ? (
            <div>
              <Header>
                <Logo href="">Labefy</Logo>
                <nav>
                  <HeaderMenu>
                    <HeaderListItem>
                      <HeaderItem href="">Sobre</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderItem href="">Minha Conta</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButton onClick={this.changePage}>
                        Criar uma nova playlist
                      </HeaderButton>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButton onClick={this.darkMode}>
                        Dark Mode
                      </HeaderButton>
                    </HeaderListItem>
                  </HeaderMenu>
                </nav>
              </Header>
              <Playlists />
            </div>
          ) : (
            <div>
              <Header>
                <Logo href="">Labefy</Logo>
                <nav>
                  <HeaderMenu>
                    <HeaderListItem>
                      <HeaderItem href="">Sobre</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderItem href="">Minha Conta</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButton onClick={this.changePage}>
                        Ir para a lista de playlists
                      </HeaderButton>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButton onClick={this.darkMode}>
                        Dark Mode
                      </HeaderButton>
                    </HeaderListItem>
                  </HeaderMenu>
                </nav>
              </Header>
              <CreatePlaylist />
            </div>
          )}
        </div>
      );
    } else if (this.state.darkMode === true) {
      // DARK MODE
      return (
        <div>
          {this.state.currentPage === "playlists" ? (
            <div>
              <HeaderDark>
                <Logo href="">Labefy</Logo>
                <nav>
                  <HeaderMenu>
                    <HeaderListItem>
                      <HeaderItem href="">Sobre</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderItem href="">Minha Conta</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButtonDark onClick={this.changePage}>
                        Criar uma nova playlist
                      </HeaderButtonDark>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButtonDark onClick={this.darkMode}>
                        Light Mode
                      </HeaderButtonDark>
                    </HeaderListItem>
                  </HeaderMenu>
                </nav>
              </HeaderDark>
              <PlaylistsDark darkModeOn={this.state.darkMode} />
            </div>
          ) : (
            <div>
              <HeaderDark>
                <Logo href="">Labefy</Logo>
                <nav>
                  <HeaderMenu>
                    <HeaderListItem>
                      <HeaderItem href="">Sobre</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderItem href="">Minha Conta</HeaderItem>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButtonDark onClick={this.changePage}>
                        Ir para lista de playlists
                      </HeaderButtonDark>
                    </HeaderListItem>
                    <HeaderListItem>
                      <HeaderButtonDark onClick={this.darkMode}>
                        Light Mode
                      </HeaderButtonDark>
                    </HeaderListItem>
                  </HeaderMenu>
                </nav>
              </HeaderDark>
              <CreatePlaylistDark />
            </div>
          )}
        </div>
      );
    }
  }
}

export default App;
