import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [isLogged, setIsLogged] = useState(false);
  let token = null;

  useEffect(() => {
    token = window.localStorage.getItem("token");
    isLoggedIn();
    console.log(isLogged);
    console.log(token);
  }, [isLogged]);

  const logout = () => {
    window.localStorage.removeItem("token");
    alert("deslogou");
    history.push("/login");
  };

  function isLoggedIn() {
    if (token !== null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            LabeX
          </Typography>

          {isLogged === true ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
