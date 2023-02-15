import React from 'react';

import classes from "../Main/Main.module.css"
import TextImageButton from "../TextImageButton/TextImageButton";

import goSideImg from "../../../assets/images/goside.svg"

const ServiceItem = ({title, price, term}) => {
    return (
        <div className={classes.serviceItem}>
            <div className={classes.serviceItemRow}>{title}</div>
            <div className={classes.serviceItemRow}>{price}</div>
            <div className={classes.serviceItemRow}>{term} мин</div>
            <div className={classes.serviceItemRow}>
                <TextImageButton
                    className={[classes.headerPageMainButtonsItem,
                        classes.serviceItemButton].join(' ')}
                    srcImage={goSideImg}
                    text="ЗАКАЗАТЬ"/>
            </div>
        </div>
    );
};

export default ServiceItem;