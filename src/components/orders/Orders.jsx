import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/cart';
import OrderReview from '../Order Review/OrderReview';
import './orders.css'
const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] =useState(savedCart)
    const handleDeleteFromCart=(id)=>{
        const newProduct = cart.filter(product=> product.id !== id)
        setCart(newProduct)
        removeFromDb(id)
    }
    return (
        <div className='container'>
            <div className='review-container'>
            {
                cart.map(product => <OrderReview key={product.id} product ={product} handleDeleteFromCart={handleDeleteFromCart}></OrderReview>)
            }
            </div>
            <div className='cart'>
            <Cart cart ={cart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;