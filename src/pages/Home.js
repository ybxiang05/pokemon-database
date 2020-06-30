import React from "react";
import Header from "../components/Header";
import CardGrid from "../components/CardGrid";
import FilterCard from "../components/filterCard";
import useFilter from "../hooks/useFilter";

const Home = props => {
  const { data } = props;
  const [searchInput, setSearchInput] = React.useState("");
  const filteredPokemon = useFilter(data, searchInput);
  console.log(filteredPokemon);
  return (
    <>
      <Header />
      <FilterCard data={data} searchInput={searchInput} setSearchInput={setSearchInput} />
      <CardGrid data={filteredPokemon} />
    </>
  );
};

export default Home;
