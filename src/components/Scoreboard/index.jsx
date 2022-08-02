import { memo } from "react"
import './styles.css'
import { Match } from "../Match"
import { NewMatch } from "../NewMatch"
import { useMatches } from "../../context/matchesContext"

const ScoreBoardComponent = () => {
    const matches = useMatches().state.matches
    return <div className="scoreboard-container">
        {matches.map(({homeName, awayName, homeScore, awayScore, finished, id}) => !finished && <Match key={homeName+awayName} id={id} homeName={homeName} awayName={awayName} homeScore={homeScore} awayScore={awayScore} />)}
        <NewMatch/>
    </div>
}

export const ScoreBoard = memo(ScoreBoardComponent)