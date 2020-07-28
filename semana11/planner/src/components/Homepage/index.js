import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
`;

const WeekTasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 13vw);
  gap: 15px;
`;

const Item = styled.div``;

const DeleteTaskContainer = styled.span`
  cursor: pointer;
`;

const TasksContainer = styled.ul`
  margin: 0 auto;
  text-align: left;
  border-bottom: 1px solid black;
  width: 75%;
`;

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic";

const Homepage = () => {
  const [currentSelectedDay, setCurrentSelectedDay] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (event) => {
    getTasks();
    setInputValue(event.target.value);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onChangeSelect = (event) => {
    setCurrentSelectedDay(event.target.value);
  };

  const getTasks = () => {
    axios
      .get(`${baseUrl}/planner-mello-fabricio-rodrigues`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createTask = () => {
    const body = {
      text: inputValue,
      day: currentSelectedDay,
    };

    axios.post(`${baseUrl}/planner-mello-fabricio-rodrigues`, body).then(() => {
      getTasks();
      setInputValue("");
    });
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Tem certeza que deseja deletar esta tarefa?")) {
      axios
        .delete(`${baseUrl}/planner-mello-fabricio-rodrigues/${taskId}`)
        .then(() => {
          getTasks();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
    }
  };

  return (
    <>
      <MainContainer>
        <label>
          Digite sua tarefa:
          <input
            type="text"
            placeholder="tarefa"
            value={inputValue}
            onChange={onChangeInput}
          />
        </label>

        <label for="select">Selecione um dia da semana:</label>
        <select id="select" onChange={onChangeSelect}>
          <option value="Monday"></option>
          <option value="Monday">Segunda</option>
          <option value="Tuesday">Terça</option>
          <option value="Wednesday">Quarta</option>
          <option value="Thursday">Quinta</option>
          <option value="Friday">Sexta</option>
          <option value="Saturday">Sábado</option>
          <option value="Sunday">Domingo</option>
        </select>

        <button onClick={createTask}>Adicionar</button>
      </MainContainer>

      <WeekTasksContainer>
        <Item>
          <h4>Segunda</h4>
          {tasks
            .filter((task) => task.day === "Monday")
            .map((filteredTask) => (
              <TasksContainer>
                {filteredTask.text}
                <DeleteTaskContainer
                  onClick={() => deleteTask(filteredTask.id)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    style={{ width: 24, height: 24, marginLeft: 5 }}
                  />
                </DeleteTaskContainer>
              </TasksContainer>
            ))}
        </Item>
        <Item>
          <h4>Terça</h4>
          {tasks
            .filter((task) => task.day === "Tuesday")
            .map((filteredTask) => (
              <TasksContainer>
                {filteredTask.text}
                <DeleteTaskContainer
                  onClick={() => deleteTask(filteredTask.id)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    style={{ width: 24, height: 24, marginLeft: 5 }}
                  />
                </DeleteTaskContainer>
              </TasksContainer>
            ))}
        </Item>
        <Item>
          <h4>Quarta</h4>
          {tasks
            .filter((task) => task.day === "Wednesday")
            .map((filteredTask) => (
              <TasksContainer>
                {filteredTask.text}
                <DeleteTaskContainer
                  onClick={() => deleteTask(filteredTask.id)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    style={{ width: 24, height: 24, marginLeft: 5 }}
                  />
                </DeleteTaskContainer>
              </TasksContainer>
            ))}
        </Item>
        <Item>
          <h4>Quinta</h4>
          {tasks
            .filter((task) => task.day === "Thursday")
            .map((filteredTask) => (
              <TasksContainer>
                {filteredTask.text}
                <DeleteTaskContainer
                  onClick={() => deleteTask(filteredTask.id)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    style={{ width: 24, height: 24, marginLeft: 5 }}
                  />
                </DeleteTaskContainer>
              </TasksContainer>
            ))}
        </Item>
        <Item>
          <h4>Sexta</h4>
          {tasks
            .filter((task) => task.day === "Friday")
            .map((filteredTask) => (
              <TasksContainer>
                {filteredTask.text}
                <DeleteTaskContainer
                  onClick={() => deleteTask(filteredTask.id)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    style={{ width: 24, height: 24, marginLeft: 5 }}
                  />
                </DeleteTaskContainer>
              </TasksContainer>
            ))}
        </Item>
        <Item>
          <h4>Sábado</h4>
          {tasks
            .filter((task) => task.day === "Saturday")
            .map((filteredTask) => (
              <TasksContainer>
                {filteredTask.text}
                <DeleteTaskContainer
                  onClick={() => deleteTask(filteredTask.id)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    style={{ width: 24, height: 24, marginLeft: 5 }}
                  />
                </DeleteTaskContainer>
              </TasksContainer>
            ))}
        </Item>
        <Item>
          <h4>Domingo</h4>

          {tasks
            .filter((task) => task.day === "Sunday")
            .map((filteredTask) => (
              <TasksContainer>
                {filteredTask.text}
                <DeleteTaskContainer
                  onClick={() => deleteTask(filteredTask.id)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    style={{ width: 24, height: 24, marginLeft: 5 }}
                  />
                </DeleteTaskContainer>
              </TasksContainer>
            ))}
        </Item>
      </WeekTasksContainer>
    </>
  );
};

export default Homepage;
