import React from "react";
import "./App.css";
import { Header } from "./Component/Header";
import { ExpenseCounter } from "./Component/ExpenseCounter";
import { History } from "./Component/History";
import { TransactionList } from "./Component/TransactionList";
import { AddTransaction } from "./Component/AddTransaction";
import { TransactionProvider } from "./Global State/transContext";
function App() {
   return (
      <div className="Container">
         <TransactionProvider>
            <Header />
            <ExpenseCounter />
            <History />
            <TransactionList />
            <AddTransaction />
         </TransactionProvider>
      </div>
   );
}

export default App;
