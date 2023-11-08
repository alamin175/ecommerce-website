import './cart.css'
import React from 'react';

const Cart = (props) => {
    const {cart} = props
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
        </div>
    );
};

export default Cart;