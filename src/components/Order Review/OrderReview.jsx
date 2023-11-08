import React from 'react';
import './review.css'
const OrderReview = ({product}) => {
    const {img, price, name, shipping } = product
    return (
        <div className='review-details'>
            <img src={img} alt="" />
        <div className='review-space'>
        <div className='review'>
                <p>{name}</p>
                <p>Price: <span>${price} </span></p>
                <p>Shipping Charge: <span>${shipping} </span> </p>
            </div>
            <p className='delete'>d</p>
        </div>
            {/* <button className='delete-button'>d</button> */}
        </div>
    );
};

export default OrderReview;