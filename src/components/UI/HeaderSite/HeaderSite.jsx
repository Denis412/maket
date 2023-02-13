import React, {useState} from 'react';
import MenuActiveItemIndicator from "../MenuActiveItemIndicator/MenuActiveItemIndicator";
import TextImageButton from "../TextImageButton/TextImageButton";

import repairImg from "../../../assets/images/repair.svg"
import checkStatusImg from "../../../assets/images/checkstatus.svg"

import classes from "../Main/Main.module.css"
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import HeaderInformation from "../HeaderInformation/HeaderInformation";
const HeaderSite = ({titlePage, activePage, setActivePage}) => {
    const [navigationItems, setNavigationItems] = useState([
        {id: 1, title: "Ремонтируемые бренды", link: "#"},
        {id: 2, title: "Дополнительные услуги", link: "#"},
        {id: 3, title: "Цены на услуги", link: "#"},
        {id: 4, title: "Адреса сервисных центров", link: "#"},
        {id: 5, title: "Специальные цены", link: "#"},
        {id: 6, title: "Отзывы", link: "#"},
    ]);

    return (
        <header className={classes.headerPage}>
            <HeaderInformation titlePage={titlePage}/>
            <HeaderNavigation
                activePage={activePage}
                setActivePage={setActivePage}
                navigationItems={navigationItems}
            />
        </header>
    );
};

export default HeaderSite;