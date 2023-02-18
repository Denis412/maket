import React from 'react';

const TextareaForm = ({id, placeholder, classNames}) => {
    return (
        <textarea
            className={classNames}
            name={id}
            id={id}
            placeholder={placeholder}
        />
    );
};

export default TextareaForm;