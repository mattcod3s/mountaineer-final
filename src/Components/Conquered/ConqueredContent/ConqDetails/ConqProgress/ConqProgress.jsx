import React, { useContext, useEffect } from 'react';
import './conqProgressStyles.scss';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import {ConqStatusContext, ActiveTripsContext, PercentLoaderContext } from '../../../../../context/context';


const ConqProgress = () => {
    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    const [progressPercent, setProgressPercent] = useContext(PercentLoaderContext);
    const [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    
    let finLength = activeTrips.length > 10 ? 47 : 10
    useEffect(() => {
        let temp = (((activeTrips.length) / finLength) * 100 );
        setProgressPercent( Math.round(temp * 10) / 10 );
    }, [activeTrips, conqStatus])
    

    return (
        <div className='conqProgress' >
            <SemiCircleProgressBar strokeWidth={5} percentage={progressPercent} background={'rgba(0,0,0,0.2)'} showPercentValue stroke={'#8577BD'} diameter={360}/>
        </div>
    )
}

export default ConqProgress;


