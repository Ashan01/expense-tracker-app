import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
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
