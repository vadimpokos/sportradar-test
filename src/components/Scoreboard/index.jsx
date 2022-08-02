import { memo } from "react"
import './styles.css'
import { Match } from "../Match"

const ScoreBoardComponent = () => {
    return <div className="scoreboard-container">
        <Match homeName='Germany' awayName='Austria' homeScore={5} awayScore={4} />
        <Match homeName='Belarus' awayName='Nigeria' homeScore={0} awayScore={10} />
    </div>
}

export const ScoreBoard = memo(ScoreBoardComponent)