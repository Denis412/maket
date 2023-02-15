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

import CompanyCardsList from "../CompanyCardsList/CompanyCardsList";
import ImageTextButton from "../ImageTextButton/ImageTextButton";

const MainSiteContent = ({hiddenMenu}) => {
    const [chapters, setChapter] = useState([
        {id: 1, title: "РЕМОНТ РАЗЛИЧНЫХ БРЕНДОВ", content:
                <>
                    <CompanyCardsList cardsCompanies={[
                        {id: 1, srcLogo: lenovoLogo},
                        {id: 3, srcLogo: samsungLogo},
                        {id: 5, srcLogo: appleLogo},
                        {id: 7, srcLogo: viewSonicLogo},
                        {id: 2, srcLogo: boschLogo},
                        {id: 4, srcLogo: hpLogo},
                        {id: 6, srcLogo: acerLogo},
                        {id: 8, srcLogo: sonyLogo},]}
                    />
                    <ImageTextButton
                        className={classes.headerPageMainButtonsItemHover}
                        style={{marginTop: "1.5rem"}}
                        srcImage={arrowImg}
                        text="Показать все"
                    />
                </>},
        {id: 2, title: "РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ", content: null},
        {id: 3, title: "ЦЕНЫ НА УСЛУГИ", content: null},
    ]);
    const [activePage, setActivePage] = useState(1);

    return (
        <section className={hiddenMenu
            ? [classes.mainContent, cl.menuHide].join(' ')
            : classes.mainContent}
        >
            <div className={classes.mainContainer}>
                <HeaderSite
                    activePage={activePage}
                    setActivePage={setActivePage}
                    titlePage="Услуги и сервисы"
                />
                <InformationCompany />
                <ChaptersPageList chapters={chapters}/>
            </div>
        </section>
    );
};

export default MainSiteContent;