import React from 'react';
import './custom-button.styles.scss';

//May need to update className with a conditional for 'active' class:
const CustomButton = ( {children, toggleActiveClass, ...otherProps} ) => (
    <button type="button" className={ `${toggleActiveClass} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

/* const CustomButton = ( { children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button type="button" className={`${inverted ? 'inverted' : ""} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
) */

