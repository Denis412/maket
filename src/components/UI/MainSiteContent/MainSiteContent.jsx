import React from 'react';
import classes from "../Main/Main.module.css";
import cl from "../Menu/Menu.module.css";
import HeaderSite from "../HeaderSite/HeaderSite";

const MainSiteContent = ({hiddenMenu}) => {
    return (
        <section className={hiddenMenu ? [classes.mainContent, cl.menuHide].join(' ') : classes.mainContent}>
            <HeaderSite titlePage="Услуги и сервисы"/>
        </section>
    );
};

export default MainSiteContent;