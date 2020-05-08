import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 2%;
  flex-grow: 1;
  padding: 10px;
`;

const PokeCard = props => {
  const { name, url, pokemonId } = props;
  return (
    <StyledCard>
      <>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        />
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <p>{url}</p>
      </>
    </StyledCard>
  );
};

export default PokeCard;
