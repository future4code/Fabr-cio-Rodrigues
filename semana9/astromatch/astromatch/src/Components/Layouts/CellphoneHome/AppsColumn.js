import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import AstroLogo from "./AstromatchLogo.png";

const AppIcon = styled.div`
  cursor: pointer;
`;

export default function AppsColumn(props) {
  const { goBack } = props;

  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://i.pinimg.com/originals/e2/bc/2b/e2bc2b005d593253f62a4727d3da5d4f.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/1200px-Mail_%28iOS%29.svg.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/photo-gallery-461706.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/calendar-1395-461708.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
      </Grid>

      {/**  Segunda coluna */}
      <Grid container spacing={6}>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src={AstroLogo}
              alt=""
              style={{ width: 55, height: 55 }}
              onClick={() => goBack("home")}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
      </Grid>

      {/** TERCEIRA COLUNA */}

      <Grid container spacing={6}>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-media-2112/29/Asset_1-512.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Maps_icon.svg/1200px-Google_Maps_icon.svg.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/7e/fe/42/7efe4257-caa5-978d-a723-2f7b0840cbd4/OneDrive.png/1200x630bb.png"
              alt=""
              style={{ width: 55, height: 60 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
      </Grid>
      {/** QUARTA COLUNA */}

      <Grid container spacing={6}>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://km.support.apple.com/kb/image.jsp?productid=PL165&size=240x240"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/skype-1411851-1194340.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/uber-12-761721.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/telegram-1868973-1583137.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
      </Grid>

      {/** QUINTA COLUNA */}

      <Grid container spacing={6}>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://img.ibxk.com.br/2015/12/programas/14638629152725141.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://i.pinimg.com/originals/8e/14/6e/8e146e9e28baeb9b59c6004ed7b1343b.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Feedly-512.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
        <Grid item md={3}>
          <AppIcon style={{ width: 55, height: 55 }}>
            <img
              src="https://image.flaticon.com/icons/png/512/23/23957.png"
              alt=""
              style={{ width: 55, height: 55 }}
            />
          </AppIcon>
        </Grid>
      </Grid>
    </>
  );
}
