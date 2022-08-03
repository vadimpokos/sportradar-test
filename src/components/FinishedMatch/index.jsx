import { memo } from "react"
import './styles.css'

const FinishedMatchComponent = ({homeName, awayName, homeScore, awayScore, id}) => {
    return <div className="summary-match-container">
        <div>{`Home: ${homeName}`}</div>
        <div>{`${homeScore} : ${awayScore}`}</div>
        <div>{`Away: ${awayName}`}</div>
    </div>
}

export const FinishedMatch = memo(FinishedMatchComponent)