const getMatchesFromStorage = () => {
  const matches = localStorage.getItem("matches");
  return matches ? JSON.parse(matches) : [];
};

const setMatchesToStorage = (newMatchesArray) => {
  localStorage.setItem("matches", JSON.stringify(newMatchesArray));
};

export { getMatchesFromStorage, setMatchesToStorage };
