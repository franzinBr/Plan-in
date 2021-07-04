import React from 'react';
import { ButtonStyled } from './Button.style';

const Button = ({ children, ...props }) => {
    return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
