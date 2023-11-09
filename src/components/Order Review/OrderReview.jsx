import React from 'react';
import './review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const OrderReview = ({product, handleDeleteFromCart}) => {
    const {id, img, price, name, shipping } = product
    return (
        <div className='review-details'>
            <img src={img} alt="" />
        <div className='review-space'>
        <div className='review'>
                <p>{name}</p>
                <p>Price: <span>${price} </span></p>
                <p>Shipping Charge: <span>${shipping} </span> </p>
        </div>
            {/* <p className='delete'>d</p> */}
            <button onClick={()=> handleDeleteFromCart(id)} className='delete-button'><FontAwesomeIcon icon= {faTrashAlt} /></button>
        </div>
        </div>
    );
};

export default OrderReview;