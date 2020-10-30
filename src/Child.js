import React from 'react'
import './App.css'

const Child = () => {
    return (
        <div className='container'>
            <h3 className='header'>Expense Tracker App</h3>

            <h3 className='padding'>Your Balance <br/> $2600</h3>

            <div className='expense-container'>
                <h4>Income <br/> $5000</h4>
                <h4>Expense <br/> $2400</h4>
            </div>

            <h3 className='padding'>History</h3>
            <hr/>

            <ul className='transaction-list'>
                <li>
                    <span>Cash</span>
                    <span>500</span>
                </li>
                <li>
                    <span>Book</span>
                    <span>-200</span>
                </li>
                <li>
                    <span>Camera</span>
                    <span>-290</span>
                </li>
            </ul>
            
            <h3 className='padding'>Add Transaction</h3>
            <hr/>

            <form>
                <label>Text</label>
                <br/>
                <input className='form-element' required/>
                <br/><br/>
                <label>Amount</label>
                <br/>
                <input type='number' className='form-element' required/>
                <br/><br/>
               <button className='form-element'>Add Transaction</button>
            </form>
        </div>
    )
}
export default Child;