import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/cart';
import Product from '../shop/product';
import './main-container.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then (res=> res.json())
        .then (data => setProducts(data))
       
    },[])
    useEffect(()=>{
        const storedCart = getShoppingCart()
        const savedCart = []
        // step 1: get id od the addedProduct
        for(const id in storedCart){
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart =(product)=>{
        const newCart= [...cart, product]
        setCart(newCart)
        addToDb(product.id)

    }
    
    return (
        <div className='container'>
            <div className='product'>
            {
                products.map(product =>  <Product key = {product.id} product = {product} handleAddToCart= {handleAddToCart} ></Product>)
            }
            </div>
            <div className='order'>
                <Cart cart ={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;