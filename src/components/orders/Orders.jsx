import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
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
    const handleClearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='container'>
            <div className='review-container'>
            {
                cart.map(product => <OrderReview key={product.id} product ={product} handleDeleteFromCart={handleDeleteFromCart}></OrderReview>)
            }
            </div>
            <div>
            <Cart cart ={cart} handleClearCart={handleClearCart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;