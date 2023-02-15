import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './check-out-item.styles.scss';

function CheckOutItem({ cartItem }) {
    const cart = useContext(CartContext);
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = cart;
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
            <div className="remove-button" onClick={() => deleteItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;