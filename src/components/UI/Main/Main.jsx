import React, {useEffect, useState} from 'react';
import Menu from "../Menu/Menu";

import cl from "../Menu/Menu.module.css"
import classes from "./Main.module.css"
import MainSiteContent from "../MainSiteContent/MainSiteContent";
import Fog from "../Fog/Fog";
import MediaQuery, {useMediaQuery} from "react-responsive";

const Main = () => {
    const [hiddenMenu, setHiddenMenu] = useState(true);

    const isDesktop = useMediaQuery({
        query: "(min-width: 769px)",
    });
    const isTablet = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useEffect(() => {
        isDesktop && setHiddenMenu(false);
        isTablet && setHiddenMenu(true);
    }, [isDesktop, isTablet]);

    return (
        <div className={classes.fullPage}>
            <MediaQuery minWidth={769}>
                <Menu hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>
            </MediaQuery>

            <MainSiteContent hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>

            <MediaQuery maxWidth={768}>
                <Fog visible={hiddenMenu} onClick={setHiddenMenu}/>
                <Menu hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>
            </MediaQuery>
        </div>
    );
};

export default Main;