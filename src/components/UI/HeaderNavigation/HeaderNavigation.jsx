import React from 'react';
import HeaderNavigationItem from "../HeaderNavigationItem/HeaderNavigationItem";

import classes from "../Main/Main.module.css"
import ActiveNavigationItemIndicator from "../ActiveNavigationItemIndicator/ActiveNavigationItemIndicator";
const HeaderNavigation = ({navigationItems}) => {
    return (
        <nav className={classes.headerPageNavigation}>
            {navigationItems.map(item =>
                <HeaderNavigationItem
                    key={item.id}
                    title={item.title}
                    link={item.link}
                />
            )}
        </nav>
    );
};

export default HeaderNavigation;