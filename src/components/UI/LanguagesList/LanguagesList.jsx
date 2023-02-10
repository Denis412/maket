import React, {useState} from 'react';
import classes from "../Menu/Menu.module.css";
import LanguageItem from "../LanguageItem/LanguageItem";

const LanguagesList = () => {
    const [languages, setLanguages] = useState([
        {id: 1, title: "RU"},
        {id: 2, title: "EN"},
        {id: 3, title: "CH"},
    ])
    const [activeLanguage, setActiveLanguage] = useState(0);

    const clickLanguage = (id) => {
        setActiveLanguage(id - 1);
    }

    return (
        <ul className={classes.menuFooterLanguages}>
            {languages.map(language =>
                <LanguageItem
                    key={language.id}
                    id={language.id}
                    title={language.title}
                    activeLanguage={activeLanguage}
                    clickLanguage={clickLanguage}
                />
            )}
        </ul>
    );
};

export default LanguagesList;