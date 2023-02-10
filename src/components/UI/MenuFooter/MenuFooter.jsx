import React from 'react';

import phoneImg from "../../../assets/images/chat copy.svg"
import chatPhone from "../../../assets/images/chat.svg"
import profileImg from "../../../assets/images/profile.svg"

import classes from "../Menu/Menu.module.css"
import LanguagesList from "../LanguagesList/LanguagesList";

const MenuFooter = () => {
    return (
        <section className={classes.menuFooter}>
            <div>
                <img className={[classes.menuFooterIcon, "iconButton"].join(' ')} src={phoneImg} alt=""/>
                <img className={[classes.menuFooterIcon, "iconButton"].join(' ')} src={chatPhone} alt=""/>
                <img className={[classes.menuFooterIcon, "iconButton"].join(' ')} src={profileImg} alt=""/>
            </div>
            <div className={classes.menuContacts}>
                <a className={classes.menuContactsMail} href="#">mail@cps.com</a>
                <a className={classes.menuContactsPhone} href="#">8 800 890 8900</a>
                <LanguagesList />
            </div>
        </section>
    );
};

export default MenuFooter;