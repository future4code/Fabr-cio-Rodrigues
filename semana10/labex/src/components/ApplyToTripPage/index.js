import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../services/useForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricio-rodrigues-mello";

function ApplyToTripPage() {
  const [token, setToken] = useState(null);

  const pathParams = useParams();
  const tripId = pathParams.id;
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setToken(token);

    console.log(token);
  }, [history]);

  function applyToTrip() {
    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    console.log(axiosConfig);
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios
      .post(`${baseUrl}/trips/${tripId}/apply`, body, axiosConfig)
      .then(() => {
        alert("Aplicação enviada com sucesso!");
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
    applyToTrip();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ width: "90vw" }}>
        <Typography
          component="div"
          style={{
            borderRadius: 25,
            backgroundColor: "#cfe8fc",
            height: "60vh",
            marginTop: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            style={{ fontFamily: "Segoe UI" }}
          >
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
              placeholder="Primeiro nome"
              value={form.name}
              type="text"
              pattern="[A-zà-ÿ]{3,}"
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
              name="applicationText"
              placeholder="Texto de aplicação"
              value={form.applicationText}
              pattern="[A-zà-ÿ]{3,}"
              type="text"
              onChange={handleInputChange}
              required
              style={{ height: 20 }}
            />
            <input
              name="profession"
              placeholder="Profissão"
              pattern="[A-zà-ÿ]{10,}"
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
