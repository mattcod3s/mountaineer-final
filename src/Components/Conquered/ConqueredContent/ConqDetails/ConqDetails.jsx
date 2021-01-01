import React from 'react';
import './conqDetailStyles.scss';
import ConqList from './ConqList/ConqList';
import ConqProgress from './ConqProgress/ConqProgress';

const ConqDetails = () => {
    return (
        <div className='conqDetails'>
            <ConqList />
            <ConqProgress />
        </div>
    )
}

export default ConqDetails;
