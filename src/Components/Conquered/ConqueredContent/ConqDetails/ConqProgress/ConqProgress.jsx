import React, { Component, useContext } from 'react';
import './conqProgressStyles.scss';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { ActiveTripsContext, PercentLoaderContext } from '../../../../../context/context';


const ConqProgress = () => {
    const [progressPercent, setProgressPercent] = useContext(PercentLoaderContext);
    const [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    setProgressPercent( ((activeTrips.length) / 10) * 100 );
    return (
        <div className='conqProgress' >
            <SemiCircleProgressBar strokeWidth={5} percentage={progressPercent} background={'rgba(0,0,0,0.2)'} showPercentValue stroke={'#8577BD'} diameter={360}/>
        </div>
    )
}

export default ConqProgress;


