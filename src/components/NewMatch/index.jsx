import { useEffect, useState } from "react";
import { setMatch } from "../../context/actions";
import { useMatches } from "../../context/matchesContext";
import { setMatchesToStorage } from "../../storageService/Storage";
import "./styles.css";

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

  const matches = handleMatchesContext.state.matches;

  useEffect(() => setMatchesToStorage(matches), [matches]);

  const handleCreateMatch = () => {
    home &&
      away &&
      handleMatchesContext.dispatch(setMatch(matches.length, home, away));
    setHome("");
    setAway("");
  };

  return (
    <div className="create-container">
      <div className="create-title">Create new match</div>
      <div className="create-inputs">
        <input value={home} onChange={handleHome}></input>
        <input value={away} onChange={handleAway}></input>
        <button onClick={handleCreateMatch}>Create!</button>
      </div>
    </div>
  );
};
