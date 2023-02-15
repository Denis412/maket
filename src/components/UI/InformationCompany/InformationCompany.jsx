import React from 'react';

import informationCompany from "../../../assets/images/_MG_3223.png"

import classes from "../Main/Main.module.css"
import ImageTextButton from "../ImageTextButton/ImageTextButton";

import arrowImg from "../../../assets/images/icon.svg"
const InformationCompany = () => {
    return (
        <section className={classes.mainContentInformationSite}>
            <section className={classes.mainContentInformationSiteLeftSide}>
                <p>Мы являемся авторизованным сервисным центром по ремонту техники Dell.
                    Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>
                <p>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера,
                    что подтверждает большое количество постоянных клиентов. Мы гордимся тем,
                    что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>
                <ImageTextButton
                    style={{marginTop: "0.8125rem"}}
                    className={classes.headerPageMainButtonsItemHover}
                    srcImage={arrowImg}
                    text="Читать далее"
                />
            </section>
            <section className={classes.mainContentInformationSiteImage}>
                <img style={{borderRadius: "6px"}} src={informationCompany} alt=""/>
            </section>
        </section>
    );
};

export default InformationCompany;