import React from 'react';
import './cart-item.styles.scss';

function CartItem({cartItem}) {
    const { name, quantity, photo, price } = cartItem;
    return (
        <div className="cart-item-container">
            <img src={photo} alt={name}/>
            <div className='item-details'>
                <span className="name">{ name }</span>
                <span className="price">{ quantity } x ${price}</span>
            </div>
        </div> 
    )
}

export default CartItem