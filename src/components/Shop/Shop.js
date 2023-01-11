import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Carts from '../Carts/Carts';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './shop.css'


const Shop = () => {

    const first10= fakeData.slice(0, 10);
    const [product, setProduct]= useState(first10);

    const [cart, setCart]= useState([]);

    const addCart= (eachProduct) => {
        // console.log('added', eachProduct);
        const newCart= [...cart, eachProduct];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product">
                    {
                        product.map(items => <Product addCart= {addCart} pd= {items}></Product>)
                    }
            </div>

            <div className="cart">
                <Carts cart= {cart}></Carts>
            </div>
        </div>
    );
};

export default Shop;