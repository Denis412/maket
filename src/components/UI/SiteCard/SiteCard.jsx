import React from 'react';

import goImg from "../../../assets/images/go.svg"

import classes from "../Main/Main.module.css"

const SiteCard = ({srcImg, title, ...props}) => {
    return (
        <section className={props.className}>
            {srcImg
                ? <img src={srcImg} alt=""/>
                : <span>{title}</span>}
            <div className={props.flexEnd && classes.flexEndImg}>
                <img className="iconButton" src={goImg} alt=""/>
            </div>
        </section>
    );
};

export default SiteCard;