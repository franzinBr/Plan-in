import React from 'react';
import { Wrapper, DateTime, Label, Error } from './DateTimePicker.style';

const DateTimePicker = ({
    name,
    label,
    register,
    error,
    defaultValue = '',
}) => {
    return (
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <DateTime
                type="datetime-local"
                id={name}
                name={name}
                defaultValue={defaultValue}
                {...register(name, { required: true })}
            />
            {error && <Error>This field is required</Error>}
        </Wrapper>
    );
};

export default DateTimePicker;
