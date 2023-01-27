import React from 'react'

function CartItem({cartItem}) {
    const { name, quantity } = cartItem;
    return (
        <div className="cart-item-container">
            <h2 className="cart-item-name">{name}</h2>
            <span>{quantity}</span>
        </div> 
    )
}

export default CartItem