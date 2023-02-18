import React from 'react';

import classes from "../Main/Main.module.css";
import InputForm from "../InputForm/InputForm";
import ModalFooter from "../ModalFooter/ModalFooter";
const ModalCallContent = () => {
    const classNames = classes.modalContentInputsItemStandart;
    return (
        <div className={classes.modalContent}>
            <form>
                <InputForm id="phone" classNames={classNames} type="text" placeholder="Телефон"/>
                <ModalFooter />
            </form>
        </div>
    );
};

export default ModalCallContent;