import "./App.css";
import { ScoreBoard } from "./components/Scoreboard";
import { SummaryTable } from "./components/SummaryTable";
import { MatchesProvider } from "./context/matchesContext";

function App() {
  return (
    <div className="App">
      <MatchesProvider>
        <ScoreBoard />
        <SummaryTable />
      </MatchesProvider>
    </div>
  );
}

export default App;
