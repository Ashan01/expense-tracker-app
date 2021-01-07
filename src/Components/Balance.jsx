import React, { useContext } from "react";
import { TransContext } from "../Global States/transContext";

export const Balance = () => {
   let { Transaction } = useContext(TransContext);

   const getIncome = () => {
      let income = 0;
      for (var i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount > 0) income += Transaction[i].amount;
      }
      return income;
   };

   const getExpense = () => {
      let Expense = 0;
      for (var i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount < 0) Expense += Transaction[i].amount;
      }
      return Expense;
   };

   return (
      <div>
         <div className="padding">
            <h3>Balance</h3>
            <h3>${getIncome() + getExpense()}</h3>
         </div>
         <br />
         <div className="expense-container">
            <h3>
               Income <br /> ${getIncome()}
            </h3>
            <h3>
               Expense <br /> ${getExpense()}
            </h3>
         </div>
      </div>
   );
};
