import React, { useContext } from 'react';
import "./product-card.styles.scss";

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component'

function ProductCard({ product }) {
    const { name, price, imageUrl } = product;

    const { addItemToCart, cartItems } = useContext(CartContext);
    const addToCartHandler = () => {
        addItemToCart(product)
        console.log(cartItems)
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button type='inverted' onClick={addToCartHandler} >Add to Cart</Button>
        </div>
    )
}

export default ProductCard