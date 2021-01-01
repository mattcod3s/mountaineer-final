import React from 'react';
import './conqDataStyles.scss';
import ConqPie from './ConqPie/ConqPie';
import ConqBar from './ConqBar/ConqBar';

const ConqData = () => {
    return (
        <div className="conqData">
            <ConqPie />
            <ConqBar />
        </div>
    )
}

export default ConqData;
