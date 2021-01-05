import React, { useContext, useEffect } from 'react';
import './conqProgressStyles.scss';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { ActiveTripsContext, PercentLoaderContext } from '../../../../../context/context';


const ConqProgress = () => {
    const [progressPercent, setProgressPercent] = useContext(PercentLoaderContext);
    const [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);
    
    let finLength = activeTrips.length > 10 ? 50 : 10
    useEffect(() => {
        setProgressPercent( ((activeTrips.length) / finLength) * 100 );
    }, [activeTrips])
    

    return (
        <div className='conqProgress' >
            <SemiCircleProgressBar strokeWidth={5} percentage={progressPercent} background={'rgba(0,0,0,0.2)'} showPercentValue stroke={'#8577BD'} diameter={360}/>
        </div>
    )
}

export default ConqProgress;


