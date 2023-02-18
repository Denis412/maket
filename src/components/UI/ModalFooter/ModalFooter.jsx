import React from 'react';
import classes from "../Main/Main.module.css";
import TextImageButton from "../TextImageButton/TextImageButton";
import goSideImg from "../../../assets/images/goside.svg";

const ModalFooter = () => {
    return (
        <div className={classes.modalFooter}>
            <div className={classes.informationText}>
                <p>Нажимая “отправить”,
                    вы даете согласие на <a className={classes.informationLink} href="#">обработку персональных данных </a>
                    и соглашаетесь с нашей <a className={classes.informationLink} href="#">политикой конфиденциальности</a></p>
            </div>
            <div className={classes.modalFormButtons}>
                <TextImageButton
                    className={[classes.headerPageMainButtonsItem,
                        classes.serviceItemButton, classes.modalButton].join(' ')}
                    srcImage={goSideImg}
                    text="ОТПРАВИТЬ"/>
            </div>
        </div>
    );
};

export default ModalFooter;