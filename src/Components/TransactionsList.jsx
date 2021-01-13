import React, { useContext } from "react";
import { TransContext } from "../States/transContext";

export const TransactionsList = () => {
   let { Transaction } = useContext(TransContext);

   return (
      <div>
         <div className="padding">
            <h2>Transactions List</h2>
         </div>
         <div className="transaction-list padding">
            {Transaction.map((val, ind) => {
               return (
                  <li key={ind}>
                     <span>{val.desc}</span>
                     <span>{val.amount}</span>
                  </li>
               );
            })}
         </div>
      </div>
   );
};
