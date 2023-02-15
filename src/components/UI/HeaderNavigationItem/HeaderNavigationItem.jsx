import React from 'react';

import classes from "../Main/Main.module.css"
const HeaderNavigationItem = ({id, title, link, activePage, setActivePage}) => {
    return (
        <div className={[classes.headerPageNavigationContainerItem, classes.headerPageNavigationActiveItem].join(' ')}
             style={{visibility: activePage === id ? 'visible' : 'hidden'}}
             onClick={() => {setActivePage(id)}}
        >
            <span className={classes.headerPageNavigationContainerItemText}>{title}</span>
        </div>
    );
};

export default HeaderNavigationItem;