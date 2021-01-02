import React, { useContext } from 'react';
import './conqListHeadStyles.scss';
import Carousel from 'react-material-ui-carousel';
import { ConqListContext } from '../../../../../../context/context';

const ConqListHeader = () => {

    const [conqIndex, setConqIndex] = useContext(ConqListContext);

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
            <Carousel onChange={(active) => setConqIndex(active)}
            animation={"slide"} indicators={true} navButtonsAlwaysInvisible indicatorContainerProps={{className: 'indCont'}} autoPlay={false}>
                {listItems.map( (item, i) => 
                <div className='conqList__item'>
                    <h2>{item.name}</h2>
                    <p>{conqIndex}</p>
                </div> )}
            </Carousel>
        </div>
    )
}

export default ConqListHeader;
