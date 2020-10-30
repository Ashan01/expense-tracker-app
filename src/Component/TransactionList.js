import React from 'react'
import '../App.css'

export const TransactionList = () => {
    return (
        <div>
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
        </div>
    )
}
