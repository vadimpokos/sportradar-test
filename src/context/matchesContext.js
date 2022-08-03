import { createContext, useMemo, useReducer, useContext } from "react";
import { getMatchesFromStorage } from "../storageService/Storage";
import { FINISH_MATCH, SET_MATCH, UPDATE_MATCH_SCORE } from "./constants";

const MatchesContext = createContext(undefined);

const matchesReducer = (state, action) => {
  switch (action.type) {
    case SET_MATCH:
      return {
        ...state,
        matches: [
          ...state.matches,
          {
            id: action.payload.id,
            homeName: action.payload.home,
            awayName: action.payload.away,
            homeScore: "0",
            awayScore: "0",
            finished: false,
          },
        ],
      };
    case UPDATE_MATCH_SCORE:
      return {
        ...state,
        matches: [
          ...state.matches.slice(0, action.payload.id),
          {
            id: action.payload.id,
            homeName: state.matches[action.payload.id].homeName,
            awayName: state.matches[action.payload.id].awayName,
            homeScore: action.payload.homeScore
              ? action.payload.homeScore
              : state.matches[action.payload.id].homeScore,
            awayScore: action.payload.awayScore
              ? action.payload.awayScore
              : state.matches[action.payload.id].awayScore,
            finished: false,
          },
          ...state.matches.slice(action.payload.id + 1),
        ],
      };
    case FINISH_MATCH:
      return {
        ...state,
        matches: [
          ...state.matches.slice(0, action.payload.id),
          {
            id: action.payload.id,
            homeName: state.matches[action.payload.id].homeName,
            awayName: state.matches[action.payload.id].awayName,
            homeScore: state.matches[action.payload.id].homeScore,
            awayScore: state.matches[action.payload.id].awayScore,
            finished: true,
          },
          ...state.matches.slice(action.payload.id + 1),
        ],
      };
    default: {
      throw new Error("Invalid action!!!");
    }
  }
};

const MatchesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(matchesReducer, {
    matches: getMatchesFromStorage(),
  });

  const memoizedMatches = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return (
    <MatchesContext.Provider value={memoizedMatches}>
      {children}
    </MatchesContext.Provider>
  );
};

const useMatches = () => {
  const matches = useContext(MatchesContext);

  return matches;
};

export { MatchesProvider, useMatches };
