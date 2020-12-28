import React from 'react';
import './planStyles.scss';
import PlannedContent from './PlannedContent/PlannedContent';

const Planned = ({isPlanActive}) => {
    return (
        <div className={isPlanActive ? "plan_active" : "plan"}>
            <PlannedContent />
        </div>
    )
}

export default Planned;
