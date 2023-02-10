import React, {useState} from 'react';
import classes from "../Menu/Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";
import MenuActiveItemIndicator from "../MenuActiveItemIndicator/MenuActiveItemIndicator";

const MenuList = () => {
    const [menuList, setMenuList] = useState([
        {id: 1, title: "Ремонт техники"},
        {id: 2, title: "Услуги и сервисы"},
        {id: 3, title: "Корпоративным клиентам"},
        {id: 4, title: "Продавцам техники"},
        {id: 5, title: "Партнерам"},
        {id: 6, title: "Производителям"},
        {id: 7, title: "Наши сервисные центры"},
        {id: 8, title: "Контакты"},
    ]);
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