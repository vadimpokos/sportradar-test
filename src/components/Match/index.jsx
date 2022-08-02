import { memo, useEffect, useState } from "react"
import './styles.css'
import { handleValueToBeOnlyNumeric } from "../../utilities/numericInputMask"
import { useMatches } from "../../context/matchesContext"
import { setMatchesToStorage } from "../../storageService/Storage"
import { finishMatch, updateMatchScore } from "../../context/actions"

const MatchComponent = ({homeName, awayName, homeScore, awayScore, id}) => {

    const [newHomeScore, setNewHomeScore] = useState('')
    const [newAwayScore, setNewAwayScore] = useState('')

    const handleMatchesContext = useMatches()

    const matches = handleMatchesContext.state.matches

    useEffect(() => setMatchesToStorage(matches), [matches])

    const handleHome = (e) => {
        setNewHomeScore(handleValueToBeOnlyNumeric(e.target.value))
    }

    const handleAway = (e) => {
        setNewAwayScore(handleValueToBeOnlyNumeric(e.target.value))
    }

    const handleUpdateMatchScore = () => {
        handleMatchesContext.dispatch(updateMatchScore(id, newHomeScore, newAwayScore))
        setNewHomeScore(handleValueToBeOnlyNumeric(''))
        setNewAwayScore(handleValueToBeOnlyNumeric(''))
    }

    const handleFinishMatch = () => {
        handleMatchesContext.dispatch(finishMatch(id))
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