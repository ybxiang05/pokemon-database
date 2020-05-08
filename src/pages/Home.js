import React from "react";
import Header from "../components/Header";
import CardGrid from "../components/CardGrid";

const Home = props => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <Header />
      <CardGrid data={data} />
    </>
  );
};

export default Home;
