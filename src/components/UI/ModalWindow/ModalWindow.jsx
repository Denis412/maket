import React from 'react';

import classes from "../Main/Main.module.css";
import cl from "../Menu/Menu.module.css";

import MenuActiveItemIndicator from "../MenuActiveItemIndicator/MenuActiveItemIndicator";
const ModalWindow = ({title, content, side}) => {
    return (
        <section
            className={side === "left"
                ? [classes.modalWrapper, classes.modalWrapperLeftSide].join(' ')
                : [classes.modalWrapper, classes.modalWrapperRightSide].join(' ')}
        >
            <div className={classes.modalContentWrapper}>
                <div className={classes.modalHeaderWrapper}>
                    <MenuActiveItemIndicator classNames={[cl.activeIndicator, cl.activeIndicatorModal].join(' ')}/>
                    <span className={classes.modalHeaderText}>{title}</span>
                </div>
                {content}
            </div>
        </section>
    );
};

export default ModalWindow;