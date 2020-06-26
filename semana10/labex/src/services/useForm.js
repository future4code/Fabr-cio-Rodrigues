import React, { useState } from "react";

const useForm = (initialValues) => {
  // Criando o estado onde os nomes e valores do formulário
  // serão armazenados
  const [form, setForm] = useState(initialValues);

  // Handler unificado, utilizando o "name" de cada campo
  // para atualizar dinâmicamente os dados do form.
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  // Retorna o form que contém as chaves e valores
  // e o onChange que permite avisar ao hook que
  // algum dos valores mudou
  return { form, onChange, resetForm };
};

export default useForm;
