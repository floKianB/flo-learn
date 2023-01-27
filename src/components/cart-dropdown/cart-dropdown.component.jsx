import React, { useContext } from 'react'
import './cart-dropdown.styles.scss';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

function CartDropdown() {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems)
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    
                    cartItems && cartItems.map((eachItem) => <CartItem key={eachItem.id} cartItem={eachItem} />)
                }
            </div>
            <Button type='inverted' >Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown