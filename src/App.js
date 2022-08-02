import "./App.css";
import { ScoreBoard } from "./components/Scoreboard";
import { MatchesProvider } from "./context/matchesContext";

function App() {
  return (
    <MatchesProvider>
      <ScoreBoard />
    </MatchesProvider>
  );
}

export default App;
