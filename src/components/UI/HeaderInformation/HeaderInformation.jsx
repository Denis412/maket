import React from 'react';
import classes from "../Main/Main.module.css";
import MenuActiveItemIndicator from "../MenuActiveItemIndicator/MenuActiveItemIndicator";
import TextImageButton from "../TextImageButton/TextImageButton";
import repairImg from "../../../assets/images/repair.svg";
import checkStatusImg from "../../../assets/images/checkstatus.svg";

const HeaderInformation = ({titlePage}) => {
    return (
        <div className={classes.headerPageMain}>
            <div className={classes.headerPageMainTitle}>
                <MenuActiveItemIndicator pageIndicator={true}/>
                <h1>{titlePage}</h1>
            </div>
            <div className={classes.headerPageMainButtons}>
                <TextImageButton className={classes.headerPageMainButtonsItem} text="Оставить заявку" srcImage={repairImg}/>
                <TextImageButton className={classes.headerPageMainButtonsItem} text="Статус ремонта" srcImage={checkStatusImg}/>
            </div>
        </div>
    );
};

export default HeaderInformation;