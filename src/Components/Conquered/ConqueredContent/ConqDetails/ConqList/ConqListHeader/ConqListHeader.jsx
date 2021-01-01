import React from 'react';
import './conqListHeadStyles.scss';
import Carousel from 'react-material-ui-carousel'

const ConqListHeader = () => {

    const listItems = [
        {
            name: "South America",
        },
        {
            name: "North America",
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
            name: "All",
        },
        {
            name: "Top Worldwide",
        },
    ]

    return (
        <div className="conqListHeader">
            <Carousel indicators={true} navButtonsAlwaysInvisible indicatorContainerProps={{className: 'indCont'}} autoPlay={false}>
                {listItems.map( (item, i) => 
                <div className='conqList__item'>
                    <h2>{item.name}</h2>
                </div> )}
            </Carousel>
        </div>
    )
}

export default ConqListHeader;
