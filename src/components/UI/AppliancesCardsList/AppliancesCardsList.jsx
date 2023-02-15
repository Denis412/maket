import React from 'react';
import classes from "../Main/Main.module.css";
import SiteCard from "../SiteCard/SiteCard";

const AppliancesCardsList = ({cardsAppliances}) => {
    return (
        <ul className={classes.cardsList}>
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