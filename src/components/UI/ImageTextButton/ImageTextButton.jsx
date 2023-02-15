import React from 'react';
import classes from "../Main/Main.module.css";

const ImageTextButton = ({srcImage, text, ...rest}) => {
    return (
        <div {...rest} className={[classes.headerPageMainButtonsItem, rest.className].join(' ')}>
            <img className="iconButton" src={srcImage} alt=""/>
            <span style={{marginLeft: "1rem"}} className={classes.headerPageMainButtonsText}>{text}</span>
        </div>
    );
};

export default ImageTextButton;