import React, { useState, useContext } from "react";
import { TransContext } from "../States/transContext";

export const AddTransaction = () => {
   let { addTransaction } = useContext(TransContext);
   let [desc, setDesc] = useState("");
   let [amount, setAmount] = useState(0);

   const handleSubmit = (e) => {
      console.log(desc, amount);
      e.preventDefault();
      addTransaction({
         amount: Number(amount),
         desc,
      });
   };
   return (
      <div className="padding">
         <form>
            <label>Text</label>
            <br />
            <input
               type="text"
               required
               className="form-element"
               onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <br />
            <label>Amount</label>
            <br />
            <input
               type="number"
               required
               className="form-element"
               onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <br />
            <button className="addBtn" onClick={handleSubmit}>
               Add Transaction
            </button>
         </form>
      </div>
   );
};
