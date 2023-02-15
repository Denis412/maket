import React from 'react';
import classes from "../../Menu/Menu.module.css";
import MenuIcons from "../../MenuIcons/MenuIcons";
import MenuList from "../../MenuList/MenuList";
import MenuFooter from "../../MenuFooter/MenuFooter";

const DesktopMenu = ({menuList}) => {
    return (
        <section
            className={classes.menu}
        >
            <MenuIcons/>
            <MenuList menuList={menuList}/>
            <MenuFooter/>
        </section>
    );
};

export default DesktopMenu;