import React, { createContext, useReducer } from "react";
import { TransReducer } from "./transReducer";

let initialTransition = [
   { amount: 12000, desc: "Investment" },
   { amount: -7000, desc: "Bills" },
   { amount: 20000, desc: "Salary" },
];

export const TransContext = createContext(initialTransition);

export const TransProvider = ({ children }) => {
   let [state, dispatch] = useReducer(TransReducer, initialTransition);

   function addTransaction(obj) {
      return dispatch({
         type: "ADD_TRANSACTION",
         payload: {
            amount: obj.amount,
            desc: obj.desc,
         },
      });
   }
   return (
      <TransContext.Provider value={{ Transaction: state, addTransaction }}>
         {children}
      </TransContext.Provider>
   );
};
