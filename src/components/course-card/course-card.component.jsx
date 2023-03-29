import React, { useContext } from 'react';
import "./course-card.styles.scss";

// import { CartContext } from '../../context/cart.context';
// import Button from '../button/button.component'

function CourseCard({ course }) {
    console.log(course);
    const { name, price, photo } = course;
    return (
        <div className='product-card-container'>
            <img className='image' src={photo} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    )
}

export default CourseCard