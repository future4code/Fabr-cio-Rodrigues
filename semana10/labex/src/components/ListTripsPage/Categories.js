import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  padding: 8px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

function Categories(props) {
  const {
    planetFilter,
    durationFilter,
    onChangePlanetFilter,
    onChangeDurationFilter,
  } = props;

  return (
    <FiltersContainer>
      <h3>Filtrar</h3>
      <div>
        <InputContainer>
          Planeta
          <input
            type="text"
            value={planetFilter}
            onChange={onChangePlanetFilter}
          />
        </InputContainer>
      </div>
      <div>
        <InputContainer>
          Duração
          <input
            type="text"
            value={durationFilter}
            onChange={onChangeDurationFilter}
          />
        </InputContainer>
      </div>
      <div></div>
    </FiltersContainer>
  );
}

export default Categories;
