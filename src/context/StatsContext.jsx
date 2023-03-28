import { createContext, useReducer } from "react";
export const StatsContext = createContext();

export const statsContextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, loading: action.payload };
    case "UPDATE_HIGHLIGHTED_DATASET":
      return { ...state, highlightedDataset: action.payload };
    case "POPULATE_DISPLAY_ORIGINAL_DATASETS":
      return {
        ...state,
        displayDataset: action.payload,
        originalDataset: action.payload,
      };
    case "FILTER_DISPLAY_DATASET":
      return {
        ...state,
        displayDataset: state.originalDataset.filter(
          (individualDataset) =>
            individualDataset.country_code == action.payload
        ),
      };
    case "RESET_FILTER":
      return { ...state, displayDataset: state.originalDataset };
    default:
      return state;
  }
};
export const StatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statsContextReducer, {
    loading: true,
    highlightedDataset: {},
    displayDataset: {},
    originalDataset: {},
  });
  return (
    <StatsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StatsContext.Provider>
  );
};
