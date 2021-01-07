import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { TransactionsList } from "./Components/TransactionsList";
import { AddTransaction } from "./Components/addTransaction";
import { TransProvider } from "./Global States/transContext";

function App() {
   return (
      <div className="Container">
         <TransProvider>
            <Header />
            <Balance />
            <TransactionsList />
            <AddTransaction />
         </TransProvider>
      </div>
   );
}

export default App;
