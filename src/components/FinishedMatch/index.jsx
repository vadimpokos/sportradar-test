import { memo } from "react"

const FinishedMatchComponent = ({homeName, awayName, homeScore, awayScore, id}) => {
    return <>
        <div>{`Home: ${homeName}`}</div>
        <div>{`${homeScore} : ${awayScore}`}</div>
        <div>{`Away: ${awayName}`}</div>
    </>
}

export const FinishedMatch = memo(FinishedMatchComponent)