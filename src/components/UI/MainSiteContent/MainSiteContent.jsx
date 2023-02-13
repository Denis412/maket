import React, {useState} from 'react';
import classes from "../Main/Main.module.css";
import cl from "../Menu/Menu.module.css";
import HeaderSite from "../HeaderSite/HeaderSite";

const MainSiteContent = ({hiddenMenu}) => {
    const [activePage, setActivePage] = useState(1);
    return (
        <section className={hiddenMenu
            ? [classes.mainContent, cl.menuHide].join(' ')
            : classes.mainContent}
        >
            <HeaderSite
                activePage={activePage}
                setActivePage={setActivePage}
                titlePage="Услуги и сервисы"
            />
        </section>
    );
};

export default MainSiteContent;