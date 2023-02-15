import React, {useState} from 'react';
import classes from "../Menu/Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";
import MenuActiveItemIndicator from "../MenuActiveItemIndicator/MenuActiveItemIndicator";

const MenuList = ({menuList}) => {

    const [currentActiveItem, setCurrentActiveItem] = useState(0);

    const onClickMenuItem = (id) => {
        setCurrentActiveItem(id - 1);
    }

    return (
        <ul className={classes.menuList}>
            {menuList.map((item) =>
                <MenuItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    activeItem={currentActiveItem}
                    onClick={onClickMenuItem}
                />
            )}
            <MenuActiveItemIndicator style={{top: `${3.375 * currentActiveItem - 0.375}rem`}}/>
        </ul>
    );
};

export default MenuList;