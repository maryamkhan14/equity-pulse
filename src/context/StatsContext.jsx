import { createContext, useReducer } from "react";
export const StatsContext = createContext();

export const statsContextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, loading: action.payload };
    case "UPDATE_HIGHLIGHTED_DATASET":
      if (Object.keys(state.originalDataset).length > 0) {
        return {
          ...state,
          highlightedDataset: state.originalDataset.filter(
            (individualDataset) =>
              individualDataset.country_code == action.payload
          )[0],
        };
      } else {
        return state;
      }
    case "POPULATE_DISPLAY_ORIGINAL_DATASETS":
      return {
        ...state,
        displayDataset: action.payload,
        originalDataset: action.payload,
      };
    case "FILTER_COUNTRY_NAME":
      if (Object.keys(state.originalDataset).length > 0) {
        return {
          ...state,
          displayDataset: state.originalDataset.filter((individualDataset) =>
            individualDataset.country_name
              .toLocaleLowerCase()
              .includes(action.payload.toLocaleLowerCase())
          ),
        };
      } else {
        return state;
      }

    case "FILTER_WELFARE_TYPE":
      if (
        action.payload == "all" ||
        !state.originalDataset.hasOwnProperty("welfare_type")
      ) {
        return { ...state, displayDataset: state.originalDataset };
      }
      return {
        ...state,
        displayDataset: state.originalDataset.filter(
          (individualDataset) =>
            individualDataset.welfare_type == action.payload
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
