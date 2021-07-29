import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ( {children, ...otherProps} ) => (
    <button type="button" className={`custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

/* const CustomButton = ( { children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button type="button" className={`${inverted ? 'inverted' : ""} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

*/