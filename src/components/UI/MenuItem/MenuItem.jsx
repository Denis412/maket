import React from 'react';
import classes from "../Menu/Menu.module.css";

const MenuItem = ({title, activeItem, id, onClick}) => {
    return (
        <li
            className={activeItem === id - 1
                ? [classes.menuListItem, classes.menuListItemActive].join(' ')
                : classes.menuListItem}
            onClick={() => onClick(id)}
        >
            {title}
        </li>
    );
};

export default MenuItem;