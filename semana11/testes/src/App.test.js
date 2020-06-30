import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Funcionalidade criar novo post do input", () => {
  test("Post é criado, curtido e deletado.", () => {
    // teste 1
    const { getByText, getByPlaceholderText } = render(<App />);

    const newPostInput = getByPlaceholderText(/post/i);

    fireEvent.change(newPostInput, { target: { value: "Olá, amigos" } });

    const addButton = getByText(/Adicionar/);

    fireEvent.click(addButton);

    const Post = getByText(/Amigos/i);

    expect(Post).toHaveTextContent("Olá, amigos");

    // teste 2 (dependente do teste 1)
    const postLikeButtonText = getByText(/Curtir/i);

    fireEvent.click(postLikeButtonText);

    const dislikeButton = getByText(/Descurtir/);

    expect(dislikeButton).toHaveTextContent("Descurtir");

    // teste 3 (dependente dos testes 1 e 2)

    const eraseButtonText = getByText(/Apagar/i);

    fireEvent.click(eraseButtonText);

    expect(Post).not.toBe("Olá, amigos");
  });

  test("Quando o usuário cria um post, o input deve ser limpo.", () => {
    // Preparação
    const { getByText, getByPlaceholderText } = render(<App />);

    // Execução
    const newPostInput = getByPlaceholderText(/post/i);

    fireEvent.change(newPostInput, { target: { value: "Olá, pessoas" } });

    const addButton = getByText(/Adicionar/);

    fireEvent.click(addButton);

    // Verificação
    const inputText = getByText(/Olá, pessoas/i);

    expect(inputText).not.toBe("Olá, pessoas");
  });

  test("Quando o usuário cria um post, o input deve ser limpo.", () => {
    // Preparação
    const { getByText, getByPlaceholderText } = render(<App />);

    // Execução
    const newPostInput = getByPlaceholderText(/post/i);

    fireEvent.change(newPostInput, { target: { value: "Olá, pessoas" } });

    const addButton = getByText(/Adicionar/);

    fireEvent.click(addButton);

    // Verificação
    const inputText = getByText(/Olá, pessoas/i);

    expect(inputText).not.toBe("Olá, pessoas");
  });

  test("Quando a lista de posts está vazia, lê a mensagem.", () => {
    // Preparação
    const { getByText } = render(<App />);

    // Execução
    const noPostWarning = getByText(/Não há nenhum post/i);

    // Verificação

    expect(noPostWarning).toHaveTextContent("Não há nenhum post.");
  });

  test("A quantidade de posts deve ser mostrada", () => {
    // Preparação
    const { getByText, getByPlaceholderText } = render(<App />);

    // Execução
    const newPostInput = getByPlaceholderText(/post/i);

    fireEvent.change(newPostInput, { target: { value: "Olá, pessoas" } });

    const addButton = getByText(/Adicionar/);

    fireEvent.click(addButton);

    const noPostWarning = getByText(/Quantidade de posts:/i);

    // Verificação

    expect(noPostWarning).toHaveTextContent("Quantidade de posts: 1");
  });

  test("O usuário não deve conseguir criar posts em branco.", () => {
    // Preparação
    const { getByText, getByPlaceholderText } = render(<App />);

    // Execução
    const newPostInput = getByPlaceholderText(/post/i);

    fireEvent.change(newPostInput, { target: { value: "" } });

    const addButton = getByText(/Adicionar/);

    fireEvent.click(addButton);

    const emptyPostWarning = getByText(
      /um post deve conter ao menos um caractér!/i
    );

    // Verificação

    expect(emptyPostWarning).toHaveTextContent(
      "AVISO: um post deve conter ao menos um caractér!"
    );
  });
});
