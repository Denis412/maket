import React, {useState} from 'react';
import HeaderNavigationItem from "../HeaderNavigationItem/HeaderNavigationItem";

import classes from "../Main/Main.module.css"
const HeaderNavigation = ({activePage, setActivePage, navigationItems}) => {
    return (
        <nav className={classes.headerPageNavigation}>
            {navigationItems.map(item =>
                <HeaderNavigationItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    link={item.link}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            )}
        </nav>
    );
};

export default HeaderNavigation;