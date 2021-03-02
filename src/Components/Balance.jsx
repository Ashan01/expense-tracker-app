import React, { useContext } from "react";
import { TransContext } from "../States/transContext";

export const Balance = () => {
   let { Transaction } = useContext(TransContext);

   function getIncome() {
      let income = 0;

      for (var i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount > 0) income += Transaction[i].amount;
      }
      return income;
   }

   function getExpense() {
      let expense = 0;

      for (var i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount < 0) expense += Transaction[i].amount;
      }
      return expense;
   }

   return (
      <div>
         <div className="padding">
            <h2>Balance</h2>
            <h2>{`$ ${getIncome() + getExpense()}`}</h2>
         </div>
         <br />
         <div className="expense-container">
            <h3>
               Income <br /> {`$ ${getIncome()}`}
            </h3>
            <h3>
               Expense <br /> {`$ ${getExpense()}`}
            </h3>
         </div>
      </div>
   );
};
