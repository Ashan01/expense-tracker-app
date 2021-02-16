import React, { useContext } from "react";
import { TransContext } from "../States/transContext";

export const TransactionsList = () => {
   const { Transaction } = useContext(TransContext);
   console.log(Transaction);
   return (
      <div>
         <div className="padding">
            <h2>Transactions List</h2>
         </div>
         <div className="transaction-list padding">
            {Transaction.map((obj, ind) => {
               return (
                  <li key={ind}>
                     <span>{obj.desc}</span>
                     <span>{obj.amount}</span>
                  </li>
               );
            })}
         </div>
      </div>
   );
};
