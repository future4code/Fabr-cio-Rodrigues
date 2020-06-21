import React from "react";
import AppsColumn from "./AppsColumn";

import Clock from "react-live-clock";

import Button from "@material-ui/core/Button";

import Signal from "@material-ui/icons/SignalCellular4Bar";
import Wifi from "@material-ui/icons/SignalWifi4Bar";
import Battery from "@material-ui/icons/BatteryFull";

import {
  MainContainer,
  Screen,
  ButtonsContainer,
  Header,
  Hole,
} from "./styles";

import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./Theme";

function CellphoneHome(props) {
  const { login, currentTheme } = props;

  function goBack(page) {
    if (page === "home") {
      login("home");
    }
  }

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <MainContainer>
        <Header>
          <Hole></Hole>
          <div style={{ position: "fixed", left: 40 }}>
            <Clock format="H:mm" ticking={true} />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "fixed",
              right: 15,
              width: 80,
            }}
          >
            <div>
              <Signal />
            </div>
            <div>
              <Wifi />
            </div>
            <div>
              <Battery />
            </div>
          </div>
        </Header>

        <Screen>
          <AppsColumn goBack={goBack} />
        </Screen>
        <ButtonsContainer>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/phone-1559-461603.png"
            alt=""
            style={{ width: 50, height: 50 }}
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/messages-18-461599.png"
            alt=""
            style={{ width: 50, height: 50 }}
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/news-364-461600.png"
            alt=""
            style={{ width: 50, height: 50 }}
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/settings-409-461608.png"
            alt=""
            style={{ width: 50, height: 50 }}
          />
        </ButtonsContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default CellphoneHome;
