import React from 'react';
import './conqStyles.scss';

const Conquered = ({isActive}) => {
    return (
        <div className={isActive ? "conq_active" : "conq"}>
            
        </div>
    )
}

export default Conquered;
