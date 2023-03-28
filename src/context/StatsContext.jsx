import { createContext, useReducer } from "react";
export const StatsContext = createContext();

export const statsContextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, loading: action.payload };
    case "UPDATE_HIGHLIGHTED_DATASET":
      return { ...state, highlightedDataset: action.payload };
    case "POPULATE_FULL_DATASET":
      return { ...state, fullDataset: action.payload };
    default:
      return state;
  }
};
export const StatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statsContextReducer, {
    loading: true,
    highlightedDataset: {},
    fullDataset: {},
  });
  return (
    <StatsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StatsContext.Provider>
  );
};
