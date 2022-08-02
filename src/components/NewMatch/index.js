import { useState } from "react";
import { useMatches } from "../../context/matchesContext";

export const NewMatch = () => {
  const [home, setHome] = useState("");
  const [away, setAway] = useState("");

  const handleHome = (e) => {
    setHome(e.target.value);
  };

  const handleAway = (e) => {
    setAway(e.target.value);
  };

  const handleMatchesContext = useMatches();

  const handleCreateMatch = () => {
    handleMatchesContext.dispatch({
      type: "setMatch",
      payload: { home: home, away: away },
    });
    setHome("");
    setAway("");
  };

  return (
    <>
      <input value={home} onChange={handleHome}></input>
      <input value={away} onChange={handleAway}></input>
      <button onClick={handleCreateMatch}>Create!</button>
    </>
  );
};
