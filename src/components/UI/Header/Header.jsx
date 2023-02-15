import React from 'react';

import burgerMenuImg from "../../../assets/images/burger1.svg"
import logoImg from "../../../assets/images/Group.svg"
import phoneImg from "../../../assets/images/chat copy.svg"
import chatImg from "../../../assets/images/chat.svg"
import profileImg from "../../../assets/images/profile.svg"
import repairImg from "../../../assets/images/repair.svg"
import checkStatusImag from "../../../assets/images/checkstatus.svg"


import classes from "../Menu/Menu.module.css"
const Header = () => {
    const classNames = ["iconButton", classes.headerIcon].join(' ');
    return (
        <div className={classes.header}>
            <div className={classes.headerLeftSide}>
                <img className={classNames} src={burgerMenuImg} alt=""/>
                <div className={classes.headerSplit}></div>
                <img className={classes.headerLogo} src={logoImg} alt=""/>
            </div>
            <div className={classes.headerRightSide}>
                <img className={classNames} src={phoneImg} alt=""/>
                <img className={classNames} src={chatImg} alt=""/>
                <img className={classNames} src={profileImg} alt=""/>
                <div className={classes.headerSplit}></div>
                <div className={classes.headerHelpIcons}>
                    <img className={classNames} src={repairImg} alt=""/>
                    <img className={classNames} src={checkStatusImag} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;