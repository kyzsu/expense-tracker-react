import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Lego", amount: -20 },
    { id: 2, text: "Salary", amount: 1500 },
    { id: 3, text: "Rent", amount: -550 },
  ],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
