import { memo } from "react"
import './styles.css'

const MatchComponent = ({homeName, awayName, homeScore, awayScore}) => {
    return <div className="match-container">
        <div className="team-name home-name">Home: {homeName}</div>
        <div className="score">{`${homeScore} : ${awayScore}`}</div>
        <div className="team-name away-name">Away: {awayName}</div>
    </div>
}

export const Match = memo(MatchComponent)