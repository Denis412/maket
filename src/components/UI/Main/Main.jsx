import React, {useState} from 'react';
import Menu from "../Menu/Menu";

import cl from "../Menu/Menu.module.css"
import classes from "./Main.module.css"
import MainSiteContent from "../MainSiteContent/MainSiteContent";

const Main = () => {
    const [hiddenMenu, setHiddenMenu] = useState(false);

    return (
        <div className={classes.fullPage}>
            <Menu hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>
            <MainSiteContent hiddenMenu={hiddenMenu}/>
        </div>
    );
};

export default Main;