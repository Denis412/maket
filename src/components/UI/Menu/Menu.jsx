import React, {useState} from 'react';
import classes from "./Menu.module.css"

import MenuList from "../MenuList/MenuList";
import MenuIcons from "../MenuIcons/MenuIcons";
import MenuFooter from "../MenuFooter/MenuFooter";

const Menu = ({hiddenMenu, setHiddenMenu}) => {
    return (
        <section
            className={hiddenMenu ? [classes.menu, classes.menuHide].join(' ') : classes.menu}
        >
            <MenuIcons onHideMenu={setHiddenMenu}/>
            <MenuList/>
            <MenuFooter/>
        </section>
    );
};

export default Menu;