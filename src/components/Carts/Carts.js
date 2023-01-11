import React from 'react';
import Header from '../Header/Header';

const Carts = (props) => {
    const cart= props.cart;

    // let total= 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const prd = cart[i];
    //     total= total+prd.price;
    // }

    let productPrice= cart.reduce((initial, newTotal) => initial+newTotal.price, 0);

    const round= (num) =>{
        return Number(num.toFixed(2));
    }

    let shipping= 0;
    if(productPrice> 0 && productPrice<20){
        shipping= 11;
    }

    else if(productPrice> 20 && productPrice<100){
        shipping= 5; 
    }
    else if(productPrice> 100){
        shipping= 0;
    }

    const tax= (productPrice/10);

    const total= productPrice+shipping+tax;

    return (
        <div>
            <h3>Order Summary:</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <h6>Product Price: {round(productPrice)}</h6>
            <h6>Shipping Cost {shipping}</h6>
            <h6>Product Price with Shipping: {round(productPrice+shipping)}</h6>
            <h6>Tax+vat {round(tax)}</h6>
            <h5>Total Cost: {round(total)}</h5>
        </div>
        
    );
};

export default Carts;