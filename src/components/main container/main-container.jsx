import React, { useEffect, useState } from 'react';
import Product from '../shop/product';
import './main-container.css'

const MainContainer = () => {
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then (res=> res.json())
        .then (data => setProducts(data))
    },[])
    return (
        <div className='container'>
            <div className='product'>
            {
                products.map(product =>  <Product key = {product.id} product = {product} ></Product>)
            }
            </div>
            <div className='order'>
            <h3>Order Summary </h3>
            <p>Selected Items : </p>
            <p>Toatl Price : </p>
            <p>Total Shipping Charge : </p>
            <p>Tax : </p>
            </div>
        </div>
    );
};

export default MainContainer;