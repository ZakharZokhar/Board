import React from 'react';
import {InputWrapper, StyledLabel} from "./styles";

export const StyledInput = ({onChange, value, name, required, id, error, textLabel}) => (

    <InputWrapper>
        <StyledLabel htmlFor={id}>{textLabel}</StyledLabel>
        <input onChange={onChange} onBlur={onChange} value={value} id={id}
               name={name} type="text" required={required}/>
        {(error && error.length > 0) && <div style={{color: 'red'}}>{error}</div>}
    </InputWrapper>

)
