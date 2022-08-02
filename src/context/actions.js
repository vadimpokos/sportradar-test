import { FINISH_MATCH, SET_MATCH, UPDATE_MATCH_SCORE } from "./constants";

const setMatch = (id, home, away) => {
  return {
    type: SET_MATCH,
    payload: {
      id: id,
      home: home,
      away: away,
    },
  };
};

const updateMatchScore = (id, newHomeScore, newAwayScore) => {
  return {
    type: UPDATE_MATCH_SCORE,
    payload: { id: id, homeScore: newHomeScore, awayScore: newAwayScore },
  };
};

const finishMatch = (id) => {
  return {
    type: FINISH_MATCH,
    payload: { id: id },
  };
};

export { setMatch, updateMatchScore, finishMatch };
