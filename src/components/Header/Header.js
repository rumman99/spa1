import React from 'react';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import Carts from '../Carts/Carts';
import Shop from '../Shop/Shop';

const Header = (props) => {
    return (
        <div className="header-logo">
            <a href="/shop"><img src={Logo} alt="" /></a>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/manage">Manage Inventory</a>
                {/* <a className='cartIcon' href=""><FontAwesomeIcon icon={faShoppingCart}/></a> */}
            </nav>
        </div>
    );
};

export default Header;