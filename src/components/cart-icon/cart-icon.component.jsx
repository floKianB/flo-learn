import React, { useContext } from 'react'
import './cart-icon.styles.scss';


import { CartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

function CartIcon() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const cartOpenHandler = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={cartOpenHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{ cartCount }</span>
        </div>
    )
}

export default CartIcon