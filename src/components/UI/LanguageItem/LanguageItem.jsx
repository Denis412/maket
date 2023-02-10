import React from 'react';

import classes from "../Menu/Menu.module.css"
const LanguageItem = ({title, activeLanguage, id, clickLanguage}) => {
    return (
        <li
            className={activeLanguage === id - 1
                ? [classes.menuFooterLanguage, classes.menuListItemActive].join(' ')
                : classes.menuFooterLanguage}
            onClick={() => clickLanguage(id)}
        >
            {title}
        </li>
    );
};

export default LanguageItem;