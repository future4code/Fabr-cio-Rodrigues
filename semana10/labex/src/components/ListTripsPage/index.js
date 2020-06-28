import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import Categories from "./Categories";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 16px;
  gap: 32px;
`;

function ListTripsPage() {
  const [planetFilter, setPlanetFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState(0);

  const onChangePlanetFilter = (event) => {
    setPlanetFilter(event.target.value);
  };

  const onChangeDurationFilter = (event) => {
    setDurationFilter(event.target.value);
  };

  return (
    <AppContainer>
      <Categories
        planetFilter={planetFilter}
        durationFilter={durationFilter}
        onChangePlanetFilter={onChangePlanetFilter}
        onChangeDurationFilter={onChangeDurationFilter}
      />
      <ProductsGrid
        planetFilter={planetFilter}
        durationFilter={durationFilter}
      />
    </AppContainer>
  );
}

export default ListTripsPage;
