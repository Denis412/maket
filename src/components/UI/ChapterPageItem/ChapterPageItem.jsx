import React from 'react';

import classes from "../Main/Main.module.css"
const ChapterPageItem = ({title, content}) => {
    return (
        <section className={classes.chapterContainer}>
            <section className={classes.chapterContainerPageTitle}>
                <div className={classes.chapterContainerPageTitleText}>
                    {title}
                </div>
            </section>
            <div className={classes.chapterContainerPageContent}>
                {content}
            </div>
        </section>
    );
};

export default ChapterPageItem;