import { useState } from "react";
import { useMatches } from "../../context/matchesContext";
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

  const handleCreateMatch = () => {
    home &&
      away &&
      handleMatchesContext.dispatch({
        type: "setMatch",
        payload: {
          id: handleMatchesContext.state.matches.length,
          home: home,
          away: away,
        },
      });
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
