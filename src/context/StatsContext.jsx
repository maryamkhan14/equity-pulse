import { createContext, useReducer } from "react";
export const StatsContext = createContext();

export const statsContextReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const StatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statsContextReducer, {});
  return (
    <StatsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StatsContext.Provider>
  );
};
