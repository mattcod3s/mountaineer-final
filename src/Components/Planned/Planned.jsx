import React from 'react';
import './planStyles.scss';

const Planned = ({isPlanActive}) => {
    return (
        <div className={isPlanActive ? "plan_active" : "plan"}>
            
        </div>
    )
}

export default Planned;
