import React, { useState, useContext } from 'react';
import './optionsStyles.scss';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { StatusProvider, StatusContext } from '../../../context/context';

const Options = () => {
    const [conqStatus, setConqStatus] = useContext(StatusContext);
    const [planStatus, setPlanStatus] = useContext(StatusContext);

    const handleConqClick = () => {
        setConqStatus(!conqStatus);
        console.log(conqStatus);
    }
    
    const handlePlanClick = () => {
        setPlanStatus(!planStatus);
        console.log(planStatus);
    }

    return (
        <div className="options__menu">
            <div className="option__menu__container">
                <div className="option__menu__option" onClick={handleConqClick}>
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
                <div className="option__menu__option" onClick={handlePlanClick}>
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
