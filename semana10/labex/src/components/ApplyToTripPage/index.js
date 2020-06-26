import React, { useState, useEffect } from "react";
import useForm from "../../services/useForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";

function ApplyToTripPage() {
  const { form, onChange, resetForm } = useForm({});
  const tripId = "1eW09MsidYoNyivFdClS";

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
  };

  const applyToTrip = () => {
    const token = window.localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricio-rodrigues-mello/trip/${tripId}/apply`
      )
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
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
            Formulário de aplicação
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "50%",
              height: "50%",
            }}
          >
            <input
              name="name"
              placeholder="Primeiro Nome"
              value={form.name}
              type="text"
              pattern="[A-Za-z ]{3,}"
              onChange={handleInputChange}
              required
            />
            <input
              name="age"
              placeholder="Idade"
              value={form.age}
              type="number"
              min="18"
              onChange={handleInputChange}
              required
            />
            <input
              name="text"
              placeholder="Texto de aplicação"
              value={form.applicationText}
              pattern="{30,}"
              type="text"
              onChange={handleInputChange}
              required
              style={{ height: 20 }}
            />
            <input
              name="profession"
              placeholder="Profissão"
              pattern="{10,}"
              value={form.profession}
              type="text"
              onChange={handleInputChange}
              required
            />
            <input
              name="country"
              placeholder="País"
              value={form.country}
              type="text"
              onChange={handleInputChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default ApplyToTripPage;
