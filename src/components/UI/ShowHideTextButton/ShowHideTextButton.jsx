import React, {useState} from 'react';
import classes from "../Main/Main.module.css";

const ShowHideTextButton = ({srcImage, textShow, textHide, showText, setShowText, ...rest}) => {
    return (
        <div
            {...rest}
            className={[classes.headerPageMainButtonsItem, rest.className].join(' ')}
            onClick={() => setShowText()}
        >
            <img
                className={showText
                    ? ["iconButton", classes.rotateImg].join(' ')
                    : "iconButton"}
                src={srcImage}
                alt=""
            />
            <span
                style={{marginLeft: "1rem"}}
                className={classes.headerPageMainButtonsText}
            >
                {!showText ? textShow : textHide}
            </span>
        </div>
    );
};

export default ShowHideTextButton;