import React, { useContext, useState } from "react";
import { transactionContext } from "../Global State/transContext";

export const AddTransaction = () => {
   let { addTransaction } = useContext(transactionContext);
   let [newDesc, setDesc] = useState("");
   let [newAmount, setAmount] = useState(0);

   const handleChange = (e) => {
      e.preventDefault();
      addTransaction({
         amount: Number(newAmount),
         desc: newDesc,
      });
   };

   return (
      <div>
         <h3 className="padding">Add Transaction</h3>
         <hr />

         <form onSubmit={handleChange}>
            <label>Text</label>
            <br />
            <input className="form-element" onChange={(e) => setDesc(e.target.value)} required />
            <br />
            <br />
            <label>Amount</label>
            <br />
            <input type="number" className="form-element" onChange={(e) => setAmount(e.target.value)} required />
            <br />
            <br />
            <button className="form-element">Add Transaction</button>
         </form>
      </div>
   );
};
