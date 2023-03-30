import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './check-out-item.styles.scss';

function CheckOutItem({ cartItem }) {
    const cart = useContext(CartContext);
    const { addItemToCart, deleteItemFromCart } = cart;
    const { name, quantity, price, photo } = cartItem;
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={photo} alt={name} />
            </div>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
            <div className="remove-button" onClick={() => deleteItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;