import React from 'react';

const InputForm = ({id, type, placeholder, classNames}) => {
    return (
        <input
            className={classNames}
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
        />
    );
};

export default InputForm;