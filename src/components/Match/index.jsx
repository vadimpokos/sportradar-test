import { memo, useState } from "react"
import './styles.css'
import { handleValueToBeOnlyNumeric } from "../../utilities/numericInputMask"
import { useMatches } from "../../context/matchesContext"

const MatchComponent = ({homeName, awayName, homeScore, awayScore, id}) => {

    const [newHomeScore, setNewHomeScore] = useState('')
    const [newAwayScore, setNewAwayScore] = useState('')

    const matches = useMatches()

    const handleHome = (e) => {
        setNewHomeScore(handleValueToBeOnlyNumeric(e.target.value))
    }

    const handleAway = (e) => {
        setNewAwayScore(handleValueToBeOnlyNumeric(e.target.value))
    }

    const handleUpdateMatchScore = () => {
        matches.dispatch({type: 'updateMatchScore', payload: {id: id, homeScore: newHomeScore, awayScore: newAwayScore}})
        setNewHomeScore(handleValueToBeOnlyNumeric(''))
        setNewAwayScore(handleValueToBeOnlyNumeric(''))
    }

    const handleFinishMatch = () => {
        matches.dispatch({type: 'finishMatch', payload: {id: id}})
    }

    return <div className="match-container">
        <div className="team-name home-name">Home: {homeName}</div>
        <div className="score">{`${homeScore} : ${awayScore}`}</div>
        <div className="team-name away-name">Away: {awayName}</div>
        <div>
            <input value={newHomeScore} onChange={handleHome} />
            <input value={newAwayScore} onChange={handleAway}  />
            <button onClick={handleUpdateMatchScore}>Update scores!</button>
            <button onClick={handleFinishMatch}>Finish Game!</button>
        </div>
    </div>
}

export const Match = memo(MatchComponent)