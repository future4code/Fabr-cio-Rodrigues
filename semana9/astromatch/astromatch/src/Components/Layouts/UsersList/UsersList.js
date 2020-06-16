import React, { useState, useEffect, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

import {
  MainContainer,
  Screen,
  ButtonsContainer,
  Box,
  Header,
  Logo,
} from "./styles";

import Button from "@material-ui/core/Button";
import Back from "@material-ui/icons/ArrowBackIos";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function UsersList(props) {
  const { changePage } = props;

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  function getMatches() {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricio/matches"
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
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricio/clear"
      )
      .then((response) => {
        getMatches();
      })
      .catch((e) => {
        alert("ERRO AO APAGAR MATCHES");
        console.log("erro: " + e);
      });
  }

  return (
    <div className="App">
      <MainContainer>
        <Header>
          <Logo>AstroMatch</Logo>
          <Box>
            <Button variant="outlined" onClick={() => cleanMatches()}>
              X
            </Button>
            <Button
              style={{ width: 30, height: 40 }}
              variant="outlined"
              color="secondary"
              onClick={() => changePage("usersList")}
            >
              {" "}
              <Back />
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
                        <ListItemText
                          primary={match.name}
                          style={{ color: "black" }}
                        />
                      </ListItem>
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
            style={{ color: "#ff002f", borderRadius: 100 }}
          ></Button>
        </ButtonsContainer>
      </MainContainer>
    </div>
  );
}

export default UsersList;
