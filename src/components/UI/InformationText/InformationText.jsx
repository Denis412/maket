import React from 'react';
import classes from "../Main/Main.module.css";

const InformationText = ({content, showAll}) => {
    return (
        <div className={showAll
            ? [classes.mainContentInformationSiteLeftSideText,
                classes.showMaxContent].join(' ')
            : classes.mainContentInformationSiteLeftSideText}>
            {content}
        </div>
    );
};

export default InformationText;