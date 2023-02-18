import React, {useEffect, useState} from 'react';
import Menu from "../Menu/Menu";

import cl from "../Menu/Menu.module.css"
import classes from "./Main.module.css"
import MainSiteContent from "../MainSiteContent/MainSiteContent";
import Fog from "../Fog/Fog";
import MediaQuery, {useMediaQuery} from "react-responsive";
import ModalWindow from "../ModalWindow/ModalWindow";
import ModalFeedbackContent from "../ModalFeedbackContent/ModalFeedbackContent";
import ModalCallContent from "../ModalCallContent/ModalCallContent";

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
            <ModalWindow title="Обратная связь" content={<ModalFeedbackContent />}/>
            <ModalWindow title="Заказать звонок" content={<ModalCallContent />}/>
            {/*<MediaQuery minWidth={769}>*/}
            {/*    <Menu hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>*/}
            {/*</MediaQuery>*/}

            {/*<MainSiteContent hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>*/}

            {/*<MediaQuery maxWidth={768}>*/}
            {/*    <Fog visible={hiddenMenu} onClick={setHiddenMenu}/>*/}
            {/*    <Menu hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu}/>*/}
            {/*</MediaQuery>*/}
        </div>
    );
};

export default Main;