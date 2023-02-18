import React from 'react';

import burgerMenuImg from "../../../assets/images/burger1.svg"
import logoImg from "../../../assets/images/Group.svg"
import phoneImg from "../../../assets/images/chat copy.svg"
import chatImg from "../../../assets/images/chat.svg"
import profileImg from "../../../assets/images/profile.svg"
import repairImg from "../../../assets/images/repair.svg"
import checkStatusImag from "../../../assets/images/checkstatus.svg"


import classes from "../Menu/Menu.module.css"
import ImageButton from "../ImageButton/ImageButton";
const Header = ({setHiddenMenu}) => {
    const classNames = ["iconButton", classes.headerIcon].join(' ');

    return (
        <div className={classes.header}>
            <div className={classes.headerLeftSide}>
                <ImageButton
                    srcImg={burgerMenuImg}
                    classNames={classNames}
                    onClick={() => setHiddenMenu(false)}
                />
                <div className={classes.headerSplit}></div>
                <ImageButton srcImg={logoImg} classNames={classes.headerLogo}/>
            </div>
            <div className={classes.headerRightSide}>
                <ImageButton srcImg={phoneImg} classNames={classNames}/>
                <ImageButton srcImg={chatImg} classNames={classNames}/>
                <ImageButton srcImg={profileImg} classNames={classNames}/>
                <div className={classes.headerSplit}></div>
                <div className={classes.headerHelpIcons}>
                    <ImageButton srcImg={repairImg} classNames={classNames}/>
                    <ImageButton srcImg={checkStatusImag} classNames={classNames}/>
                </div>
            </div>
        </div>
    );
};

export default Header;