import React, {useState} from 'react';
import classes from "./Menu.module.css"

import MenuList from "../MenuList/MenuList";
import MenuIcons from "../MenuIcons/MenuIcons";
import MenuFooter from "../MenuFooter/MenuFooter";

const Menu = ({hiddenMenu, setHiddenMenu}) => {
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

    return (
        <section
            className={hiddenMenu
                ? [classes.menu, classes.menuHide].join(' ')
                : [classes.menu, classes.menuShadow].join(' ')}
        >
            <MenuIcons onHideMenu={setHiddenMenu}/>
            <MenuList menuList={menuList}/>
            <MenuFooter/>
        </section>
    );
};

export default Menu;