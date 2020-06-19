import React, { useState, useEffect } from "react";
import CellphoneHome from "../CellphoneHome/CellphoneHome";
import MatchScreen from "../MatchScreen/MatchScreen";

import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";

import Matches from "@material-ui/icons/Sms";
import Like from "@material-ui/icons/FavoriteBorder";
import Dislike from "@material-ui/icons/Clear";
import HomeIcon from "@material-ui/icons/Home";

import axios from "axios";

import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./Theme";
import {
  MainContainer,
  Screen,
  DropdownMenuContainer,
  Image,
  ButtonsContainer,
  Box,
  Header,
  Logo,
  Username,
  UserDescription,
} from "./styles";

function Home(props) {
  const { changePage, newTheme, currentTheme } = props;

  const [currentPage, setPage] = useState("home");
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState(" ");
  const [userAge, setUserAge] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userPicture, setUserPicture] = useState();
  const [matchesQuantity, setMatchesQuantity] = useState();
  const [matched, setMatched] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const changeTheme = () => {
    if (currentTheme === "light") {
      newTheme("dark");
    } else if (currentTheme === "dark") {
      newTheme("light");
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setUserData = () => {
    setUserName("");
    setUserAge("");
    setUserDescription("");
    setUserPicture("");
  };

  useEffect(() => {
    fetchCurrentUser();
    document.body.addEventListener("keydown", handleKeyDown);
  }, []);

  const fetchCurrentUser = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabriciorodrigues/person"
      )
      .then((response) => {
        setUserId(response.data.profile.id);
        setUserName(response.data.profile.name);
        setUserAge(response.data.profile.age);
        setUserDescription(response.data.profile.bio);
        setUserPicture(response.data.profile.photo);
        getMatchesQuantity();
      })
      .catch((e) => {
        alert("ERRO AO REQUISITAR USUÁRIO ATUAL");
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
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabriciorodrigues/choose-person",
        body
      )
      .then((response) => {
        setMatched(response.data.isMatch);

        if (response.data.isMatch === false) {
          setUserData();
          fetchCurrentUser();
        } else if (response.data.isMatch === true) {
          setTimeout(() => {
            setUserData();
            setMatched(false);
            fetchCurrentUser();
          }, 4800);
        }
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
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabriciorodrigues/choose-person",
        body
      )
      .then((response) => {
        setUserData();
        fetchCurrentUser();
      })
      .catch((e) => {
        alert("ERRO AO DAR DISLIKE NO USUÁRIO");
        console.log("erro: " + e);
      });
  };

  function getMatchesQuantity() {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabriciorodrigues/matches"
      )
      .then((response) => {
        setMatchesQuantity(response.data.matches.length);
      })
      .catch((e) => {
        alert("ERRO AO REQUISITAR QUANTIDADE DE MATCHES");
        console.log("erro: " + e);
      });
  }

  function toggleCellphoneHome() {
    if (currentPage === "home") {
      setPage("cellphonehome");
    } else if (currentPage === "cellphonehome") {
      setPage("home");
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      userLiked();
    }

    if (event.key === "ArrowLeft") {
      userDisliked();
    }
  };

  function renderPage() {
    if (currentPage === "home") {
      return (
        <ThemeProvider
          theme={currentTheme === "light" ? lightTheme : darkTheme}
        >
          <MainContainer>
            <Header>
              {currentPage === "home" ? (
                <DropdownMenuContainer>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    variant="outlined"
                    color="secondary"
                    style={{ width: 30, height: 40 }}
                  >
                    <HomeIcon style={{ color: "gray" }} />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={(handleClose, changeTheme)}>
                      {currentTheme === "light"
                        ? "Change to a dark cellphone"
                        : "Change to a white cellphone"}
                    </MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={(handleClose, toggleCellphoneHome)}>
                      Logout
                    </MenuItem>
                  </Menu>
                </DropdownMenuContainer>
              ) : (
                <div></div>
              )}

              <Logo>AstroMatch</Logo>

              <Box>
                <Button
                  style={{ width: 30, height: 40 }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => changePage("usersList")}
                >
                  <Badge badgeContent={matchesQuantity} color="secondary">
                    <Matches style={{ color: "gray" }} />
                  </Badge>
                </Button>
              </Box>
            </Header>

            {matched === true ? (
              <MatchScreen matchName={userName} matchPicture={userPicture} />
            ) : (
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

                {userName === "" && userAge === "" ? (
                  <div></div>
                ) : (
                  <Username>
                    {userName}, {userAge}
                  </Username>
                )}

                <UserDescription>{userDescription}</UserDescription>
              </Screen>
            )}

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
                onKeyDown={handleKeyDown}
              >
                <Like />
              </Button>
            </ButtonsContainer>
          </MainContainer>
        </ThemeProvider>
      );
    } else if (currentPage === "cellphonehome") {
      return <CellphoneHome login={setPage} currentTheme={currentTheme} />;
    }
  }

  return <>{renderPage()}</>;
}

export default Home;
