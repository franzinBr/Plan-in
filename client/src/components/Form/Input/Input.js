import React from 'react';
import { Wrapper } from './Input.style';

const Input = ({ label, type, name, register, error, defaultValue = '' }) => {
    return (
        <Wrapper>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                defaultValue={defaultValue}
                {...register(name, { required: true })}
            />
            <div className="underLine"></div>
            {error && <span className="error">This field is required</span>}
        </Wrapper>
    );
};

export default Input;
