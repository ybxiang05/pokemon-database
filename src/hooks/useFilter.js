const useFilter = (data, searchInput) => {
  console.log(data, searchInput);
  return data.filter(pokemon => pokemon.name.includes(searchInput));
};

export default useFilter;
