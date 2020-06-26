import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

function Categories() {
  return (
    <FiltersContainer>
      <h3>EAE</h3>
      <div>
        <InputContainer>
          Valor mínimo
          <input type="number" />
        </InputContainer>
      </div>
      <div>
        <InputContainer>
          Valor mínimo
          <input type="number" />
        </InputContainer>
      </div>
      <div>
        <InputContainer>
          Valor mínimo
          <input type="number" />
        </InputContainer>
      </div>
    </FiltersContainer>
  );
}

export default Categories;
