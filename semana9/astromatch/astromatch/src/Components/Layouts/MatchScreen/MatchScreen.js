import React from "react";

import { Screen, ScreenFadeOut, MatchHeader, MatchText, Image } from "./styles";

function MatchScreen(props) {
  const { matchName, matchPicture } = props;

  return (
    <>
      <ScreenFadeOut>
        <Screen>
          <MatchHeader>It's a match</MatchHeader>
          <Image src={matchPicture} alt="" />
          <MatchText>You and {matchName} absolutely match!</MatchText>
        </Screen>
      </ScreenFadeOut>
    </>
  );
}

export default MatchScreen;
