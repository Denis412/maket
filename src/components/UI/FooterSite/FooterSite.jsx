import React from 'react';
import menuFooter from "../MenuFooter/MenuFooter";

import classes from "../Main/Main.module.css"
const FooterSite = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerSlider}></div>
            <section className={classes.footerContent}>
                <a className={classes.footerText} href="#">© 2019 CPS<br/>
                    Разработано командой Apesong</a>
                <a className={classes.footerText} href="#">Политика конфиденциальности</a>
                <a className={classes.footerText} href="#">Информация, размещенная на данной странице, не является публичной офертой</a>
            </section>
        </footer>
    );
};

export default FooterSite;