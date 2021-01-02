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
            <SemiCircleProgressBar strokeWidth={5} percentage={progressPercent} background={'rgba(255,255,255,0.3)'} showPercentValue stroke={'white'} diameter={400}/>
        </div>
    )
}

export default ConqProgress;


