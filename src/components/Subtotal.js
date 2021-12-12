import React from 'react'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from '../reducer';
import "./Subtotal.css"

function Subtotal() {
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className="subtotal">
        <p>Subtotal ({basket.length}): &#8377;{getBasketTotal(basket)}</p>
        <div className='gift'>
        <input type="checkbox" className='subtotal_gift'/>
        <label className='subtotal_gift'> This order contains a gift</label>
        </div>
        
        <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
