import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    // console.log(props.pd);
    const {name, price, img, seller, stock} = props.pd;

    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-desc'>
            <h3>{name}</h3>
            <p>by: {seller}</p>
            <h4>${price}</h4>
            <p>Only {stock} left in stock - Order Soon</p>
            <button onClick={ () => props.addCart(props.pd)}> <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;