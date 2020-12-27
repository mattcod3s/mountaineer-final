import React, { useState } from 'react';
import './optionsStyles.scss';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const Options = () => {

    

    return (
        <div className="options__menu">
            <div className="option__menu__container">
                <div className="option__menu__option">
                    <div className="menu__option__content">
                        <div className="option__content__title">
                            <h3>CONQUERED</h3>
                        </div>
                        <div className="divider"></div>
                        <div className="option__content__icon">
                            <CloudDoneIcon />
                        </div>
                    </div>
                </div>
                <div className="option__menu__option">
                    <div className="menu__option__content">
                        <div className="option__content__title">
                            <h3>PLANNED</h3>
                        </div>
                        <div className="divider"></div>
                        <div className="option__content__icon">
                            <LibraryAddIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;
