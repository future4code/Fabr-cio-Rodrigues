import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../services/useForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricio-rodrigues-mello";

function CreateTripPage() {
  const [token, setToken] = useState(null);
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setToken(token);

    console.log(token);
  }, [history]);

  function createTrip() {
    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    console.log(axiosConfig);
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(`${baseUrl}/trips`, body, axiosConfig)
      .then(() => {
        alert("Viagem criada com sucesso!");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Faz a chamada da API

    resetForm();
    // Redirecionar de tela

    console.log(form);
    createTrip();
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
            Criar nova viagem:
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "50%",
              height: "80%",
            }}
          >
            <input
              name="name"
              placeholder="Nome da viagem"
              value={form.name}
              type="text"
              pattern="{3,}"
              onChange={handleInputChange}
              required
            />
            <input
              name="planet"
              placeholder="Planeta"
              value={form.planet}
              type="text"
              onChange={handleInputChange}
              required
            />
            <input
              name="date"
              placeholder="Data da viagem"
              value={form.date}
              type="date"
              onChange={handleInputChange}
              required
            />
            <input
              name="description"
              placeholder="Descrição da viagem"
              value={form.description}
              pattern="{10,}"
              type="text"
              onChange={handleInputChange}
              required
            />
            <input
              name="durationInDays"
              placeholder="Duração da viagem em dias"
              value={form.durationInDays}
              type="number"
              onChange={handleInputChange}
              required
            />
            <button type="submit">Enviar</button>
            <button type="reset">Limpar campos</button>
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default CreateTripPage;
