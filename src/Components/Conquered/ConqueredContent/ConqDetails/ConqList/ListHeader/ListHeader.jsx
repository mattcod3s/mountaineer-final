import React, {useState, useContext} from 'react';
import './listHeaderStyles.scss';
import leftArrow from '../../../../../../Assets/arrows/leftArrow.svg';
import rightArrow from '../../../../../../Assets/arrows/rightArrow.svg';
import {ConqListContext, PlannedTripsContext, ActiveTripsContext} from '../../../../../../context/context';
 
const ListHeader = () => {
    const [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    const ConqueredTrips = useContext(PlannedTripsContext);
    const [index, setIndex] = useContext(ConqListContext);
    
    const handleLeft = () => {
        if (index === 0) {
            setIndex(6);
        } else {
            setIndex(index - 1);
        }
        
    }

    const handleRight = () => {
        if (index === 6) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <div className="listHeader">
            <div className="header__cont">
                <div className="header__icon">
                    <img onClick={handleLeft} src={leftArrow}/>
                </div>
                <div className="header__text">
                    <div className={index === 0 ? 'text_active' : 'text'}>ALL</div>
                    <div className={index === 1 ? 'text_active' : 'text'}>AUSTRALIA</div>
                    <div className={index === 2 ? 'text_active' : 'text'}>SOUTH AMERICA</div>
                    <div className={index === 3 ? 'text_active' : 'text'}>NORTH AMERICA</div>
                    <div className={index === 4 ? 'text_active' : 'text'}>ASIA</div>
                    <div className={index === 5 ? 'text_active' : 'text'}>EUROPE</div>
                    <div className={index === 6 ? 'text_active' : 'text'}>AFRICA</div>
                </div>
                <div className="header__icon">
                    <img onClick={handleRight} src={rightArrow}/>
                </div>
            </div>
        </div>
    )
}

export default ListHeader;
