import { createContext, useMemo, useReducer, useContext } from "react";
import { getMatchesFromStorage } from "../storageService/Storage";

const MatchesContext = createContext(undefined);

const matchesReducer = (state, action) => {
  switch (action.type) {
    case "setMatch":
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
    case "updateMatchScore":
      return {
        ...state,
        matches: [
          ...state.matches.slice(
            0,
            state.matches.findIndex((item) => item.id === action.payload.id)
          ),
          {
            id: action.payload.id,
            homeName: state.matches.find(
              (item) => item.id === action.payload.id
            ).homeName,
            awayName: state.matches.find(
              (item) => item.id === action.payload.id
            ).awayName,
            homeScore: action.payload.homeScore
              ? action.payload.homeScore
              : state.matches.find((item) => item.id === action.payload.id)
                  .homeScore,
            awayScore: action.payload.awayScore
              ? action.payload.awayScore
              : state.matches.find((item) => item.id === action.payload.id)
                  .awayScore,
            finished: false,
          },
          ...state.matches.slice(
            state.matches.findIndex((item) => item.id === action.payload.id) + 1
          ),
        ],
      };
    case "finishMatch":
      return {
        ...state,
        matches: [
          ...state.matches.slice(
            0,
            state.matches.findIndex((item) => item.id === action.payload.id)
          ),
          {
            id: action.payload.id,
            homeName: state.matches.find(
              (item) => item.id === action.payload.id
            ).homeName,
            awayName: state.matches.find(
              (item) => item.id === action.payload.id
            ).awayName,
            homeScore: state.matches.find(
              (item) => item.id === action.payload.id
            ).homeScore,
            awayScore: state.matches.find(
              (item) => item.id === action.payload.id
            ).awayScore,
            finished: true,
          },
          ...state.matches.slice(
            state.matches.findIndex((item) => item.id === action.payload.id) + 1
          ),
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
