import React, { createContext, useReducer } from "react";
import transReducer from "./transaReducer";

let Initial_Transaction = [
   { desc: "cash", amount: 50000 },
   { desc: "camera", amount: 10000 },
   { desc: "bills", amount: 2000 },
];

export const TransContext = createContext(Initial_Transaction);

export const TransProvider = ({ children }) => {
   let [state, dispatch] = useReducer(transReducer, Initial_Transaction);
   console.log("state==>", state);

   function add_Transaction(transObj) {
      dispatch({
         type: "ADD_TRANSACTION",
         payload: {
            amount: transObj.amount,
            desc: transObj.desc,
         },
      });
   }
   return (
      <TransContext.Provider
         value={{
            Transaction: state,
            add_Transaction,
         }}
      >
         {children}
      </TransContext.Provider>
   );
};
