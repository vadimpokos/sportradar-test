import { useEffect, useState } from "react";
import { setMatch } from "../../context/actions";
import { useMatches } from "../../context/matchesContext";
import { setMatchesToStorage } from "../../storageService/Storage";
import "./styles.css";

const inputLimit = 50

export const NewMatch = () => {
  const [home, setHome] = useState("");
  const [away, setAway] = useState("");

  const handleHome = (e) => {
    setHome(e.target.value.slice(0, inputLimit));
  };

  const handleAway = (e) => {
    setAway(e.target.value.slice(0, inputLimit));
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
        <div className="create-inputs-wrapper">
        <div><div>Home team name</div><input value={home} onChange={handleHome}></input></div>
        <div><div>Away team name</div><input value={away} onChange={handleAway}></input></div>
        </div>
        <button onClick={handleCreateMatch}>Create!</button>
      </div>
    </div>
  );
};
