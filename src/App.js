import React from "react";
import "./App.css";

// import { initNotification } from "./Services/serviceWorker";

import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { TransactionsList } from "./Components/TransactionsList";
import { AddTransaction } from "./Components/addTransaction";
import { TransProvider } from "./States/transContext";

function App() {
   return (
      <div className="Container">
         <TransProvider>
            <Header />
            <Balance />
            <TransactionsList />
            <AddTransaction />
         </TransProvider>
         {/* <h1>Hello World</h1>
         <button onClick={initNotification}>Configure</button> */}
      </div>
   );
}

export default App;
