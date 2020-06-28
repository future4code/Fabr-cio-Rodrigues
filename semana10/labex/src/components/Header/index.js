import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

    if (token !== null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isLogged, history]);

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
    window.location.reload(true);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ textAlign: "left" }}
          >
            <p
              style={{ cursor: "pointer", width: 65 }}
              onClick={() => history.push("/")}
            >
              LabeX
            </p>
          </Typography>

          {isLogged === true ? (
            <>
              <Button color="inherit" onClick={() => history.push("/admin")}>
                Página do Admin
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
