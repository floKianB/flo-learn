import React, { useContext } from 'react';
import "./course-card.styles.scss";

import Button from '../button/button.component'
import { CartContext } from '../../context/cart.context';


function CourseCard({ course }) {
    const { name, price, photo } = course;
    const cart = useContext(CartContext);
    const { addItemToCart, deleteItemFromCart } = cart;
    return (
        <div className='product-card-container'>
            <div className='product-image-container'>
                <Button className='addToCart button-container' onClick={() => addItemToCart(course)}>Add to Cart</Button>
                <img className='image' src={photo} alt={`${name}`}/>
            </div>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    )
}

export default CourseCard