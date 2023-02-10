import React from 'react';
import classes from "../Main/Main.module.css";

const TextImageButton = ({text, srcImage}) => {
    return (
        <div className={classes.headerPageMainButtonsItem}>
            <span className={classes.headerPageMainButtonsText}>{text}</span>
            <img className="iconButton" src={srcImage} alt=""/>
        </div>
    );
};

export default TextImageButton;