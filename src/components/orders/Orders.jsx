import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/cart';
import OrderReview from '../Order Review/OrderReview';


const Orders = () => {
    const cart = useLoaderData()
    return (
        <div className='container'>
            <div>
            {
                cart.map(product => <OrderReview key={product.id} product ={product} ></OrderReview>)
            }
            </div>
            <div className='cart'>
            <Cart cart ={cart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;