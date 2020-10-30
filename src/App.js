import React from 'react';
import './App.css'
import {Header} from './Component/Header'
import {Balance} from './Component/Balance'
import {ExpenseCounter} from './Component/ExpenseCounter'
import {History} from './Component/History'
import {TransactionList} from './Component/TransactionList'
import {AddTransaction} from './Component/AddTransaction'


function App() {
  return (
    <div className='Container'>
      <Header/>
      <Balance/>
      <ExpenseCounter/>
      <History/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  );
}

export default App;
