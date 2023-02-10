import React from 'react';

import classes from "../Menu/Menu.module.css"
import cl from "../Main/Main.module.css"

const MenuActiveItemIndicator = ({pageIndicator, ...props}) => {
    return (
        <div className={pageIndicator
            ? [classes.activeIndicator, cl.indicatorPage].join(' ')
            : classes.activeIndicator}
             {...props}
        >
        </div>
    );
};

export default MenuActiveItemIndicator;