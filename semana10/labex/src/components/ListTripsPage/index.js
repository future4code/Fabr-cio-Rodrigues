import React, { useEffect } from "react";
import ProductsGrid from "./ProductsGrid";
import Categories from "./Categories";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 3fr;
  padding: 16px;
  gap: 32px;
`;

function ListTripsPage() {
  return (
    <AppContainer>
      <Categories />
      <ProductsGrid />
    </AppContainer>
  );
}

export default ListTripsPage;
