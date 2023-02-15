import React from 'react';

import classes from "../Main/Main.module.css"
import SiteCard from "../SiteCard/SiteCard";
const CompanyCardsList = ({cardsCompanies, showAll}) => {
    return (
        <ul className={showAll
            ? [classes.showMaxContent, classes.cardsList].join(' ')
            : classes.cardsList}
        >
            {cardsCompanies.map(card =>
                <SiteCard
                    key={card.id}
                    className={[classes.card, classes.companyCard].join(' ')}
                    srcImg={card.srcImg}
                />
            )}
        </ul>
    );
};

export default CompanyCardsList;