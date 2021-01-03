import React, { createContext, useReducer } from "react";
import TransReducer from "./transaReducer";

let InitialContext = [
   { amount: 2500, desc: "Cash" },
   { amount: 3000, desc: "Deposit" },
   { amount: -15000, desc: "Camera" },
];

export const transactionContext = createContext(InitialContext);

export const TransactionProvider = ({ children }) => {
   let [state, dispatch] = useReducer(TransReducer, InitialContext);

   function addTransaction(obj) {
      dispatch({
         type: "ADD_TRANSACTION",
         payload: {
            amount: obj.amount,
            desc: obj.desc,
         },
      });
   }

   return (
      <transactionContext.Provider
         value={{
            Transaction: state,
            addTransaction,
         }}
      >
         {children}
      </transactionContext.Provider>
   );
};
