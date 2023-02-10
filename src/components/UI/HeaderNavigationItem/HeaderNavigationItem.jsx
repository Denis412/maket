import React from 'react';

import classes from "../Main/Main.module.css"
const HeaderNavigationItem = ({id, title, link, activePage}) => {
    return (
        <div className={classes.headerPageNavigationContainerItem}>
            <div className={[classes.headerPageNavigationItem, classes.headerPageNavigationActiveItem].join(' ')}>
                <span className={classes.headerPageNavigationActiveItemText}>{title}</span>
            </div>
        </div>
    );
};

export default HeaderNavigationItem;