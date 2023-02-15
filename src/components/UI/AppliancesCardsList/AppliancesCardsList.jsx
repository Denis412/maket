import React from 'react';
import classes from "../Main/Main.module.css";
import SiteCard from "../SiteCard/SiteCard";

const AppliancesCardsList = ({cardsAppliances, showAll}) => {
    return (
        <ul className={showAll
            ? [classes.cardsList, classes.showMaxContent].join(' ')
            : classes.cardsList}>
            {cardsAppliances.map(card =>
                <SiteCard
                    key={card.id}
                    className={[classes.card, classes.applianceCard].join(' ')}
                    flexEnd={true}
                    title={card.title}
                />
            )}
        </ul>
    );
};

export default AppliancesCardsList;