import './cart.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {cart, handleClearCart, children} = props
    let total = 0
    let shipping =0
    let quantity =0 
    for(const product of cart){
        product.quantity = product.quantity || 1
        quantity = product.quantity+ quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping* product.quantity
    }
    const tax = total * 7/100
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>Selected cart : {quantity} </p>
            <p>Toatl Price : $ {total} </p>
            <p>Total Shipping Charge : {shipping} </p>
            <p>Tax : {tax} </p>
            <h4>Grand Total : {grandTotal} </h4>
            <button onClick={handleClearCart} className='clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon= {faTrashAlt} /></button>
                {children}
        </div>
    );
};

export default Cart;