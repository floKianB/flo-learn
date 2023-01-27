import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import './cart-dropdown.styles.scss';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

function CartDropdown() {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOut = () => {
        navigate("/check-out");                 // Redirect the page
        setIsCartOpen(false);                   // Close the drop-down cart
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems && cartItems.map((eachItem) => <CartItem key={eachItem.id} cartItem={eachItem} />)
                }
            </div>
            <Button type='inverted' onClick={goToCheckOut} >Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown