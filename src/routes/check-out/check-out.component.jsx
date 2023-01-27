import React, { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../context/cart.context';
import CheckOutItem from '../../components/check-out-item/check-out-item.component';



function CheckOut() {
    const cart = useContext(CartContext);
    const { cartItems, totalPrice } = cart;
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

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