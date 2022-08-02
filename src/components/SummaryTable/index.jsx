import { useMatches } from '../../context/matchesContext'
import { FinishedMatch } from '../FinishedMatch'
import { compareMatchesByScoreAndId } from '../../utilities/compareMatchesByScoreAndId'
import './styles.css'

export const SummaryTable = () => {

    const matches = [...useMatches().state.matches]

    return <div className="summary-container">
        <div className='summary-title'>Summary</div>
        <div className='summary-matches-list'>
            {matches.sort(compareMatchesByScoreAndId).map(({homeName, awayName, homeScore, awayScore, finished, id}) => finished && <FinishedMatch key={homeName + awayName} homeName={homeName} awayName={awayName} homeScore={homeScore} awayScore={awayScore} id={id} />)}
        </div>
    </div>
}