import React, {useState} from 'react';

import informationCompany from "../../../assets/images/_MG_3223.png"

import classes from "../Main/Main.module.css"
import ImageTextButton from "../ImageTextButton/ImageTextButton";

import arrowImg from "../../../assets/images/icon.svg"
import InformationText from "../InformationText/InformationText";
import ShowHideTextButton from "../ShowHideTextButton/ShowHideTextButton";
const InformationCompany = () => {
    const [showText, setShowText] = useState(false);

    const setShowAllText = () => {
        setShowText(prev => !prev);
    }

    return (
        <section className={classes.mainContentInformationSite}>
            <section className={classes.mainContentInformationSiteLeftSide}>
                <InformationText content={
                    <>
                        <p>Мы являемся авторизованным сервисным центром по ремонту техники Dell.
                            Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>
                        <p>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера,
                            что подтверждает большое количество постоянных клиентов. Мы гордимся тем,
                            что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>
                    </>
                } showAll={showText}/>
                <ShowHideTextButton
                    showText={showText}
                    setShowText={setShowAllText}
                    style={{marginTop: "0.8125rem"}}
                    className={classes.headerPageMainButtonsItemHover}
                    srcImage={arrowImg}
                    textShow="Читать далее"
                    textHide="Свернуть"
                />
            </section>
            <div className={classes.mainContentInformationSiteContainerImage}>
                <div>
                    <img className={classes.mainContentInformationSiteImage} src={informationCompany} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default InformationCompany;