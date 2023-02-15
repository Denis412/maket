import React from 'react';

import classes from "../Main/Main.module.css"
import ChapterPageItem from "../ChapterPageItem/ChapterPageItem";

const ChaptersPageList = ({chapters}) => {
    return (
        <section className={classes.chapters}>
            {chapters.map(chapter =>
                <ChapterPageItem
                    key={chapter.id}
                    title={chapter.title}
                    content={chapter.content}
                />
            )}
        </section>
    );
};

export default ChaptersPageList;