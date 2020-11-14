import React, { useState, useContext } from "react";
import { TransContext } from "../Global State/transContext";

export const AddTransaction = () => {
   let { add_Transaction } = useContext(TransContext);

   let [newDesc, setDesc] = useState("");
   let [newAmount, setAmount] = useState(0);

   const handleAddition = (ev) => {
      ev.preventDefault();
      add_Transaction({
         amount: Number(newAmount),
         desc: newDesc,
      });
   };
   return (
      <div>
         <h3 className="padding">Add Transaction</h3>
         <hr />

         <form onSubmit={handleAddition}>
            <label>Text</label>
            <br />
            <input className="form-element" onChange={(ev) => setDesc(ev.target.value)} required />
            <br />
            <br />
            <label>Amount</label>
            <br />
            <input type="number" className="form-element" onChange={(ev) => setAmount(ev.target.value)} required />
            <br />
            <br />
            <button className="form-element">Add Transaction</button>
         </form>
      </div>
   );
};
