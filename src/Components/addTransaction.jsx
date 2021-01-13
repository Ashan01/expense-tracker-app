import React, { useContext, useState } from "react";
import { TransContext } from "../States/transContext";

export const AddTransaction = () => {
   let { addTransaction } = useContext(TransContext);
   let [desc, setDesc] = useState("");
   let [amount, setAmount] = useState(0);

   function handleChange(e) {
      e.preventDefault();
      addTransaction({
         desc: desc,
         amount: Number(amount),
      });
   }

   return (
      <div className="padding">
         <form onSubmit={handleChange}>
            <label>Text</label>
            <br />
            <input type="text" className="form-element" onChange={(e) => setDesc(e.target.value)} />
            <br />
            <br />
            <label>Amount</label>
            <br />
            <input type="number" className="form-element" onChange={(e) => setAmount(e.target.value)} />
            <br />
            <br />
            <button className="addBtn">Add Transaction</button>
         </form>
      </div>
   );
};
