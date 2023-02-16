import React from 'react';

const ImageButton = ({classNames, srcImg, onClick}) => {
    return (
        <img
            className={classNames}
            onClick={onClick}
            src={srcImg}
            alt=""/>
    );
};

export default ImageButton;