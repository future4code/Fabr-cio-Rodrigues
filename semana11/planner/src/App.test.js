import React from "react";
import {
  render,
  fireEvent,
  wait,
  getByLabelText,
  getByText,
} from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Homepage from "./components/Homepage/index.js";

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();

describe("Funcionalidade criar nova tarefa", () => {
  test("A tarefa é criada", () => {
    const { getByText, getByLabelText } = render(<Homepage />);

    const newTaskInput = getByLabelText(/Digite sua tarefa:/i);

    userEvent.type(newTaskInput, "Jogar bola"); // até aqui deu certo

    userEvent.selectOptions(
      getByLabelText(/Selecione um dia da semana:/i),
      getByText(/Quinta/)
    );
  });
});
