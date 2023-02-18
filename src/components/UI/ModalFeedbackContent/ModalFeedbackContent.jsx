import React from 'react';

import classes from "../Main/Main.module.css";

import ModalFooter from "../ModalFooter/ModalFooter";
import InputForm from "../InputForm/InputForm";
import TextareaForm from "../TextareaForm/TextareaForm";
const ModalFeedbackContent = () => {
    const classNamesInputs = classes.modalContentInputsItemStandart;
    const classNamesTextAreas = [classNamesInputs, classes.modalContentInputsItemBigHeight].join(' ');

    return (
        <div className={classes.modalContent}>
            <form>
                <InputForm classNames={classNamesInputs} id="firstName" type="text" placeholder="Имя"/>
                <InputForm classNames={classNamesInputs} id="phone" type="text" placeholder="Телефон"/>
                <InputForm classNames={classNamesInputs} id="email" type="email" placeholder="Электронная почта"/>
                <TextareaForm classNames={classNamesTextAreas} id="message" placeholder="Сообщение"/>
                <ModalFooter />
            </form>
        </div>
    );
};

export default ModalFeedbackContent;