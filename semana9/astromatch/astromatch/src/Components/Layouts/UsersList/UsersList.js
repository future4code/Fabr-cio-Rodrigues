import React, { useState, useEffect, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import {
  MainContainer,
  Screen,
  ListItemHover,
  ButtonsContainer,
  Box,
  Header,
  Logo,
} from "./styles";

import Button from "@material-ui/core/Button";
import Back from "@material-ui/icons/ArrowBackIos";
import Clear from "@material-ui/icons/Clear";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function UsersList(props) {
  const { changePage, currentTheme } = props;

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, [matches]);

  function getMatches() {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabriciorodrigues/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((e) => {
        alert("ERRO AO REQUISITAR USUÁRIOS");
        console.log("erro: " + e);
      });
  }

  function cleanMatches() {
    if (window.confirm("Deseja mesmo resetar todos os matches?")) {
      axios
        .put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabriciorodrigues/clear"
        )
        .then((response) => {
          getMatches();
        })
        .catch((e) => {
          alert("ERRO AO APAGAR MATCHES");
          console.log("erro: " + e);
        });
    }
  }

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <MainContainer>
        <Header>
          <Logo>AstroMatch</Logo>
          <Box>
            <Button
              style={{ width: 30, height: 40 }}
              variant="outlined"
              color="secondary"
              onClick={() => cleanMatches()}
            >
              <Clear />
            </Button>
            <Button
              style={{ width: 30, height: 40 }}
              variant="outlined"
              color="secondary"
              onClick={() => changePage("usersList")}
            >
              {" "}
              <Back style={{ position: "fixed", left: 280 }} />
            </Button>
          </Box>
        </Header>
        <Screen style={{ overflowY: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ position: "fixed", left: 125 }}
              >
                Matches
              </Typography>
              <div style={{ marginTop: 30 }}>
                <List>
                  {matches.length === 0 && (
                    <div>
                      <CircularProgress
                        color="secondary"
                        size={50}
                        style={{ marginTop: 170, marginLeft: 165 }}
                      />
                    </div>
                  )}
                  {matches.map((match) => {
                    return (
                      <ListItemHover>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <img
                                src={match.photo}
                                alt=""
                                style={{ maxWidth: 100, maxHeight: 100 }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          {currentTheme === "light" ? (
                            <ListItemText
                              primary={match.name}
                              style={{ color: "black" }}
                            />
                          ) : (
                            <ListItemText primary={match.name} />
                          )}
                        </ListItem>
                      </ListItemHover>
                    );
                  })}
                </List>
              </div>
            </Grid>
          </Grid>
        </Screen>
        <ButtonsContainer>
          <Button
            size="large"
            variant="outlined"
            style={{
              color: "#ff002f",
              borderRadius: 100,
              backgroundColor: "gray",
            }}
          ></Button>
        </ButtonsContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default UsersList;
