import React from "react";
import styled from "styled-components";
import { Card, TextField, Select } from "@material-ui/core";
import useFilters from "../hooks/useFilter";

const StyledCard = styled(Card)`
  margin-top: 150px;
  .search-bar {
    max-width: 400px;
  }
`;

const FilterCard = ({ data, searchInput, setSearchInput }) => {
  //when user starts to type, as they type each character, the list will change depending on pokemon whose names match search input

  const handleOnChange = event => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };

  return (
    <StyledCard>
      <TextField
        className="search-bar"
        variant="outlined"
        label="Search for a Pokemon"
        onChange={event => handleOnChange(event)}
      />
      {/* <Select></Select> */}
    </StyledCard>
  );
};

export default FilterCard;
