import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricio-rodrigues-mello";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/admin");
    }
  }, [history]);

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${baseUrl}/login`, loginBody);

      window.localStorage.setItem("token", response.data.token);

      alert("Bem-vindo!");
      history.push("/admin");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
      alert("Infelizmente, algo deu errado, tente novamente.");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ width: "90vw" }}>
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "60vh",
            marginTop: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h1">
            Entrar como administrador
          </Typography>
          <Input
            placeholder="Email"
            value={email}
            onChange={handleUpdateEmail}
          ></Input>
          <Input
            placeholder="Senha"
            value={password}
            onChange={handleUpdatePassword}
          ></Input>

          <Button variant="contained" onClick={login}>
            Entrar
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default LoginPage;
