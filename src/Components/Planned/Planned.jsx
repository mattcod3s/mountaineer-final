import React from 'react';
import './planStyles.scss';

const Planned = ({isActive}) => {
    return (
        <div className={isActive ? "plan_active" : "plan"}>
            
        </div>
    )
}

export default Planned;
