import React from 'react';
import './conqStyles.scss';

const Conquered = ({isConqActive}) => {
    return (
        <div className={isConqActive ? "conq_active" : "conq"}>
            
        </div>
    )
}

export default Conquered;
