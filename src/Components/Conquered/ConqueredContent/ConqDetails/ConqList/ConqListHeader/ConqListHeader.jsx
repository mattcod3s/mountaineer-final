import React, { useContext } from 'react';
import './conqListHeadStyles.scss';
import Carousel from 'react-material-ui-carousel';
import { ActiveTripsContext, ConqListContext,  PlannedTripsContext, PercentLoaderContext } from '../../../../../../context/context';
import filterConqList from '../../../../../../utils/filterConqList';

const ConqListHeader = () => {
    const { ConqueredTrips } = useContext(PlannedTripsContext);
    const [conqIndex, setConqIndex] = useContext(ConqListContext);
    const [progressPercent, setProgressPercent] = useContext(PercentLoaderContext);
    const [activeTrips, setActiveTrips] = useContext(ActiveTripsContext);


    const listItems = [
        {
            name: "All",
        },
        {
            name: "Top Worldwide",
        },
        {
            name: "Asia",
        },
        {
            name: "Australia",
        },
        {
            name: "Europe",
        },
        {
            name: "Africa",
        },
        {
            name: "South America",
        },
        {
            name: "North America",
        },
    ]

    return (
        <div className="conqListHeader">
            <Carousel onChange={(active) => {
                setConqIndex(active);
                setProgressPercent(5);
            }}
            animation={"slide"} indicators={true} navButtonsAlwaysInvisible indicatorContainerProps={{className: 'indCont'}} autoPlay={false}>
                {listItems.map( (item, i) => 
                <div className='conqList__item'>
                    <h2>{item.name}</h2>
                </div> )}
            </Carousel>
        </div>
    )
}

export default ConqListHeader;
