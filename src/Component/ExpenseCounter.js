import React, { useContext } from "react";
import "../App.css";
import { transactionContext } from "../Global State/transContext";

export const ExpenseCounter = () => {
   let { Transaction } = useContext(transactionContext);

   const getIncome = () => {
      let income = 0;
      for (var i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount > 0) income += Transaction[i].amount;
      }
      return income;
   };
   const getExpense = () => {
      let expense = 0;
      for (var i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount < 0) expense += Transaction[i].amount;
      }
      return expense;
   };

   return (
      <div>
         <h3 className="padding">
            Your Balance <br /> {getIncome() + getExpense()}
         </h3>
         <div className="expense-container">
            <h4>
               Income <br /> {getIncome()}
            </h4>
            <h4>
               Expense <br /> {getExpense()}
            </h4>
         </div>
      </div>
   );
};
