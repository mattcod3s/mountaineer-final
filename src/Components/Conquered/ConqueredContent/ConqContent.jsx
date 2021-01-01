import React from 'react';
import './conqContentStyles.scss';
import ConqDetails from './ConqDetails/ConqDetails';
import ConqData from './ConqData/ConqData';

const ConqContent = () => {
    return (
        <div className='conqContent'>
            <ConqDetails />
            <ConqData />
        </div>
    )
}

export default ConqContent;
