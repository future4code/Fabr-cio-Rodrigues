import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid red;
`;

const WeekTasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 13vw);
  gap: 15px;
`;

const Item = styled.div``;

const Homepage = () => {
  const [currentSelectedDay, setCurrentSelectedDay] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {}, []);

  const onSubmit = () => {
    if (currentSelectedDay === "Monday") {
      setMonday(inputValue);
    } else if (currentSelectedDay === "Tuesday") {
      setTuesday(inputValue);
    } else if (currentSelectedDay === "Wednesday") {
      setWednesday(inputValue);
    } else if (currentSelectedDay === "Thursday") {
      setThursday(inputValue);
    } else if (currentSelectedDay === "Friday") {
      setFriday(inputValue);
    } else if (currentSelectedDay === "Saturday") {
      setSaturday(inputValue);
    } else if (currentSelectedDay === "Sunday") {
      setSunday(inputValue);
    } else {
      alert("Dia inválido!");
    }
  };

  const onChangeSelect = (event) => {
    setCurrentSelectedDay(event.target.value);
  };
  return (
    <>
      <MainContainer>
        <label>
          Digite sua tarefa:
          <input type="text" onChange={onChangeInput} />
        </label>

        <label>Selecione um dia da semana:</label>
        <select onChange={onChangeSelect}>
          <option value="Monday">Segunda</option>
          <option value="Tuesday">Terça</option>
          <option value="Wednesday">Quarta</option>
          <option value="Thursday">Quinta</option>
          <option value="Friday">Sexta</option>
          <option value="Saturday">Sábado</option>
          <option value="Sunday">Domingo</option>
        </select>

        <button onClick={onSubmit}>Adicionar</button>
        <button onClick="limpaTarefa()">Limpar tarefas</button>
      </MainContainer>

      <WeekTasksContainer>
        <Item>
          <h4>Segunda</h4>
          {monday.map((task) => {
            return (
              <ul>
                <li>{task}</li>
              </ul>
            );
          })}
        </Item>
        <Item>
          <h4>Terça</h4>
          {tuesday.map((task) => {
            return (
              <ul>
                <li>{task}</li>
              </ul>
            );
          })}
        </Item>
        <Item>
          <h4>Quarta</h4>
          {wednesday.map((task) => {
            return (
              <ul>
                <li>{task}</li>
              </ul>
            );
          })}
        </Item>
        <Item>
          <h4>Quinta</h4>
          {thursday.map((task) => {
            return (
              <ul>
                <li>{task}</li>
              </ul>
            );
          })}
        </Item>
        <Item>
          <h4>Sexta</h4>
          {friday.map((task) => {
            return (
              <ul>
                <li>{task}</li>
              </ul>
            );
          })}
        </Item>
        <Item>
          <h4>Sábado</h4>
          {saturday.map((task) => {
            return (
              <ul>
                <li>{task}</li>
              </ul>
            );
          })}
        </Item>
        <Item>
          <h4>Domingo</h4>
          {sunday.map((task) => {
            return (
              <ul>
                <li>{task}</li>
              </ul>
            );
          })}
        </Item>
      </WeekTasksContainer>
    </>
  );
};

export default Homepage;
