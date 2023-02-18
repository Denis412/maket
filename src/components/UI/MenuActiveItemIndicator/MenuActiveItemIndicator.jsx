import React from 'react';

import classes from "../Menu/Menu.module.css"
import cl from "../Main/Main.module.css"

const MenuActiveItemIndicator = ({pageIndicator, classNames, ...props}) => {
    return (
        <div className={pageIndicator
            ? [classNames, cl.indicatorPage].join(' ')
            : classNames}
             {...props}
        >
        </div>
    );
};

export default MenuActiveItemIndicator;