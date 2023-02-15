import React from 'react';
import classes from "../Menu/Menu.module.css";

import burgerImg from "../../../assets/images/burger.svg";
import logoImg from "../../../assets/images/Group.svg";
import searchImg from "../../../assets/images/search.svg";

const MenuIcons = ({onHideMenu}) => {

    return (
        <div className={classes.menuIcons}>
            {/*<img className="iconButton" onClick={() => onHideMenu(true)} src={burgerImg} alt=""/>*/}
            <img className={classes.menuLogo} src={logoImg} alt=""/>
            <img className="iconButton" src={searchImg} alt=""/>
        </div>
    );
};

export default MenuIcons;