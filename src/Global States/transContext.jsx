import { createContext, useReducer } from "react";
import { TransReducer } from "./transReducer";

const initialTransaction = [
   { desc: "Cash", amount: 5000 },
   { desc: "Camera", amount: -6000 },
   { desc: "Bills", amount: -7000 },
];

export let TransContext = createContext(initialTransaction);

export const TransProvider = ({ children }) => {
   let [state, dispatch] = useReducer(TransReducer, initialTransaction);

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
      <TransContext.Provider
         value={{
            Transaction: state,
            addTransaction,
         }}
      >
         {children}
      </TransContext.Provider>
   );
};
