import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import People from "@material-ui/icons/People";
import Like from "@material-ui/icons/FavoriteBorder";
import Dislike from "@material-ui/icons/Clear";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

import {
  MainContainer,
  Screen,
  Image,
  ButtonsContainer,
  Box,
  Header,
  Logo,
  Username,
  UserDescription,
  BottomText,
} from "./styles";

function Home(props) {
  const { changePage } = props;
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [userDescription, setUserDescription] = useState("");
  const [userPicture, setUserPicture] = useState("");

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricio/person"
      )
      .then((response) => {
        setUserId(response.data.profile.id);
        setUserName(response.data.profile.name);
        setUserAge(response.data.profile.age);
        setUserDescription(response.data.profile.bio);
        setUserPicture(response.data.profile.photo);
      })
      .catch((e) => {
        alert("ERRO AO REQUISITAR USUÁRIOS");
        console.log("erro: " + e);
      });
  };

  const userLiked = () => {
    const body = {
      id: userId,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricio/choose-person",
        body
      )
      .then((response) => {
        fetchCurrentUser();
      })
      .catch((e) => {
        alert("ERRO AO DAR LIKE NO USUÁRIO");
        console.log("erro: " + e);
      });
  };

  const userDisliked = () => {
    const body = {
      id: userId,
      choice: false,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricio/choose-person",
        body
      )
      .then((response) => {
        fetchCurrentUser();
      })
      .catch((e) => {
        alert("ERRO AO DAR DISLIKE NO USUÁRIO");
        console.log("erro: " + e);
      });
  };

  return (
    <div className="App">
      <MainContainer>
        <Header>
          <Logo>AstroMatch</Logo>
          <Box>
            <Button
              style={{ width: 30, height: 40 }}
              variant="outlined"
              color="secondary"
              onClick={() => changePage("usersList")}
            >
              <People />
            </Button>
          </Box>
        </Header>
        <Screen>
          {userPicture === "" && (
            <div>
              <CircularProgress
                color="secondary"
                size={50}
                style={{ marginTop: 200 }}
              />
            </div>
          )}
          <Image src={userPicture} alt="" />

          <Username>
            {userName}, {userAge}
          </Username>
          <UserDescription>{userDescription}</UserDescription>
          {userPicture !== "" && <BottomText />}
        </Screen>
        <ButtonsContainer>
          <Button
            size="large"
            variant="outlined"
            style={{ color: "#ff002f", borderRadius: 100 }}
            onClick={() => userDisliked()}
          >
            <Dislike />
          </Button>
          <span> </span>
          <Button
            size="large"
            variant="outlined"
            style={{ color: "#00ff6a", borderRadius: 100 }}
            onClick={() => userLiked()}
          >
            <Like />
          </Button>
        </ButtonsContainer>
      </MainContainer>
    </div>
  );
}

export default Home;
