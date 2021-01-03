import React, { useContext } from "react";
import "../App.css";
import { transactionContext } from "../Global State/transContext";

export const TransactionList = () => {
   let { Transaction } = useContext(transactionContext);

   return (
      <div>
         <ul className="transaction-list">
            {Transaction.map((Obj, ind) => {
               return (
                  <li key={ind}>
                     <span>{Obj.desc}</span>
                     <span>{Obj.amount}</span>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};
