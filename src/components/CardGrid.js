import React from "react";
import PokeCard from "./Card";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  margin-top: 100px;
  background-color: pink;
  display: flex;
  flex-flow: row wrap;
`;

const CardGrid = props => {
  const { data } = props;
  return (
    <StyledGrid>
      {data.map(pokemon => {
        const pokemonId = pokemon.url.split("/")[pokemon.url.split("/").length - 2];
        if (pokemonId <= 10090) {
          return (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
              pokemonId={pokemonId}
            />
          );
        }
      })}
    </StyledGrid>
  );
};

export default CardGrid;
