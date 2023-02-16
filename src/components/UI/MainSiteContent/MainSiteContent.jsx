import React, {useState} from 'react';
import classes from "../Main/Main.module.css";
import cl from "../Menu/Menu.module.css";
import HeaderSite from "../HeaderSite/HeaderSite";
import InformationCompany from "../InformationCompany/InformationCompany";
import ChaptersPageList from "../ChaptersPageList/ChaptersPageList";

import lenovoLogo from "../../../assets/images/logos/Lenovo.svg"
import boschLogo from "../../../assets/images/logos/Bosch.svg"
import samsungLogo from "../../../assets/images/logos/Samsung.svg"
import hpLogo from "../../../assets/images/logos/HP.svg"
import appleLogo from "../../../assets/images/logos/Apple.svg"
import acerLogo from "../../../assets/images/logos/Acer.svg"
import viewSonicLogo from "../../../assets/images/logos/ViewSonic.svg"
import sonyLogo from "../../../assets/images/logos/Sony.svg"
import arrowImg from "../../../assets/images/icon.svg"
import lineImg from "../../../assets/images/Line.svg"

import CompanyCardsList from "../CompanyCardsList/CompanyCardsList";
import AppliancesCardsList from "../AppliancesCardsList/AppliancesCardsList";
import ServicePricesTable from "../ServicePricesTable/ServicePricesTable";
import TextImageButton from "../TextImageButton/TextImageButton";
import FooterSite from "../FooterSite/FooterSite";
import Header from "../Header/Header";
import ShowHideTextButton from "../ShowHideTextButton/ShowHideTextButton";

const MainSiteContent = ({hiddenMenu, setHiddenMenu}) => {
    const [showCompanies, setShowCompanies] = useState(false);
    const [showAppliances, setShowAppliances] = useState(false);

    const setShowAllCompanies = () => {
        setShowCompanies(prev => !prev);
    }

    function setShowAllAppliances () {
        setShowAppliances(prev => !prev);
    }

    const [chapters, setChapter] = useState([
        {id: 1, title: "РЕМОНТ РАЗЛИЧНЫХ БРЕНДОВ", content:
                <>
                    <CompanyCardsList cardsCompanies={[
                        {id: 1, srcImg: lenovoLogo},
                        {id: 2, srcImg: samsungLogo},
                        {id: 3, srcImg: appleLogo},
                        {id: 4, srcImg: viewSonicLogo},
                        {id: 5, srcImg: boschLogo},
                        {id: 6, srcImg: hpLogo},
                        {id: 7, srcImg: acerLogo},
                        {id: 8, srcImg: sonyLogo},
                    ]} showAll={showCompanies}/>
                    <ShowHideTextButton
                        showText={showCompanies}
                        setShowText={setShowAllCompanies}
                        style={{marginTop: "1.5rem"}}
                        className={classes.headerPageMainButtonsItemHover}
                        srcImage={arrowImg}
                        textShow="Показать все"
                        textHide="Скрыть"
                    />
                </>},
        {id: 2, title: "РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ", content:
                <>
                    <AppliancesCardsList cardsAppliances={[
                        {id: 1, title: "Ремонт ноутбуков"},
                        {id: 2, title: "Ремонт планшетов"},
                        {id: 3, title: "Ремонт ПК"},
                        {id: 4, title: "Ремонт мониторов"},
                    ]} showAll={showAppliances}/>
                    <ShowHideTextButton
                        showText={showAppliances}
                        setShowText={setShowAllAppliances}
                        className={classes.headerPageMainButtonsItemHover}
                        style={{marginTop: "1.5rem"}}
                        srcImage={arrowImg}
                        textShow="Показать все"
                        textHide="Скрыть"
                    />
                </>},
        {id: 3, title: "ЦЕНЫ НА УСЛУГИ", content:
                <>
                    <ServicePricesTable
                        services={[
                            {id: 1, title: 'Диагностика', price: 'Бесплатно', term: '30'},
                            {id: 2, title: 'Замена дисплея', price: '1000 ₽', term: '30-120'},
                            {id: 3, title: 'Замена полифонического динамика', price: '1000 ₽', term: '30-120'},
                            {id: 4, title: 'Тестирование с выдачей технического заключения', price: '1000 ₽', term: '30-120'},
                            {id: 5, title: 'Замена программного обеспечения', price: '1000 ₽', term: '30-120'},
                        ]}
                    />
                    <p className={classes.serviceParagraph}>Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу.
                        Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.</p>
                    <TextImageButton
                        className={["iconButton", classes.serviceButton].join(' ')}
                        text="Получить коммерческое предложение"
                        srcImage={lineImg}
                    />
                </>},
    ]);
    const [activePage, setActivePage] = useState(1);

    return (
        <section className={classes.mainContent}
        >
            <Header setHiddenMenu={setHiddenMenu}/>
            <div className={classes.mainContainer}>
                <HeaderSite
                    activePage={activePage}
                    setActivePage={setActivePage}
                    titlePage="Услуги и сервисы"
                />
                <InformationCompany />
                <ChaptersPageList chapters={chapters}/>
                <FooterSite />
            </div>
        </section>
    );
};

export default MainSiteContent;