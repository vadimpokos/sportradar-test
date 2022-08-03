export const compareMatchesByScoreAndId = (matchA, matchB) => {
  const comparedTotalScore =
    +matchB.awayScore +
    +matchB.homeScore -
    (+matchA.awayScore + +matchA.homeScore);
  if (comparedTotalScore !== 0) {
    return comparedTotalScore;
  }
  return +matchB.id - +matchA.id;
};
