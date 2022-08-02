export const compareMatchesByScoreAndId = (matchA, matchB) => {
  const compareValue =
    +matchB.awayScore +
    +matchB.homeScore -
    (+matchA.awayScore + +matchA.homeScore);
  if (compareValue !== 0) {
    return compareValue;
  }
  return +matchB.id - +matchA.id;
};
