import React from 'react';
import './product.css'
const Product = (props) => {
    const {img, name, quantity, ratings, price, category} = props.product
    const handleAddToCart =()=>{
        
    }
    return (
        <div className='product'>
            <div className='card'>
                
            <img src={img} alt="" />
            <h6> {name} </h6>
            <p>Price: ${price} </p>
            <p>Category: {category} </p>
            <p> Rating: {ratings} </p>
            <button>Add to cart</button>

            </div>

        </div>
    );
};

export default Product;