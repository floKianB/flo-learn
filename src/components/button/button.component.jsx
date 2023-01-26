import React from 'react';
import "./button.styles.scss";

const BUTTON_TTYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

function Button({ children, buttonType, ...buttonProps }) {
    return (
        <button className={`button-container ${BUTTON_TTYPE_CLASSES[buttonType]}`} {...buttonProps}>{ children }</button>
    )
}

export default Button;