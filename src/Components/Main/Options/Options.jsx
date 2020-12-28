import React, { useState, useContext, useEffect } from 'react';
import './optionsStyles.scss';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { PlanStatusProvider, PlanStatusContext, ConqStatusProvider, ConqStatusContext } from '../../../context/context';

const Options = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 700) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    const [planStatus, setPlanStatus] = useContext(PlanStatusContext);

    const handleConqClick = () => {

        setConqStatus(true);
        setPlanStatus(false);
        
        console.log("Plan : " + planStatus + " ::: Conq : " + conqStatus );
    }
    
    const handlePlanClick = () => {

        setPlanStatus(true);
        setConqStatus(false);

        console.log("Plan : " + planStatus + " ::: Conq : " + conqStatus );
    }

    return (
        <div className={`options__menu ${show && "options__menu__scrolled"}`}>
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
