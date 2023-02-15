import React from 'react';

import classes from "../Main/Main.module.css"
import ServiceItem from "../ServiceItem/ServiceItem";
const ServicePricesTable = ({services}) => {
    return (
        <section className={classes.servicesTable}>
            <div className={classes.servicesTableHeader}>
                <div className={[classes.serviceItemRow, classes.serviceItemRowHeader].join(' ')}>Ремонтные услуги</div>
                <div className={[classes.serviceItemRow, classes.serviceItemRowHeader].join(' ')}>Цена</div>
                <div className={[classes.serviceItemRow, classes.serviceItemRowHeader].join(' ')}>Срок</div>
                <div className={[classes.serviceItemRow, classes.serviceItemRowHeader].join(' ')}></div>
            </div>
            <div className={classes.servicesTableBody}>
                {services.map(service =>
                    <ServiceItem
                        key={service.id}
                        title={service.title}
                        price={service.price}
                        term={service.term}
                    />
                )}
            </div>
        </section>
    );
};

export default ServicePricesTable;