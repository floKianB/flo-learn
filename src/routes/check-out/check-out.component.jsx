import React, { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../context/cart.context';
import CheckOutItem from '../../components/check-out-item/check-out-item.component';



function CheckOut() {
    const cart = useContext(CartContext);
    const { cartItems, totalPrice } = cart;
    return (
        <div className="check-out-component-container">
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })
            }
            <span className="total">Total: ${totalPrice}</span>
        </div>
    )
}

export default CheckOut