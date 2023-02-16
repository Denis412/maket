import React from 'react';

import classes from "../Menu/Menu.module.css"

const Fog = ({visible, onClick}) => {
    return (
        <div
            className={classes.fog}
            onClick={() => onClick(true)}
            style={{display: !visible ? 'flex' : 'none'}}
        >
        </div>
    );
};

export default Fog;