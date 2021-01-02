import React, {useContext, useState, useEffect} from 'react';
import './conqStyles.scss';
import ConqContent from '../Conquered/ConqueredContent/ConqContent';


const Conquered = ({isConqActive}) => {
    
    return (
        <div className={isConqActive ? "conq_active" : "conq"}>
            <ConqContent />
        </div>
    )
}

export default Conquered;
