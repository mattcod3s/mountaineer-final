import React, { useState, createContext } from 'react';

export const StatusContext = createContext();

export const StatusProvider = (props) => {

    const [conqStatus, setConqStatus] = useState(false);
    const [planStatus, setPlanStatus] = useState(false);

    return (
        <StatusContext.Provider value={
            [conqStatus, setConqStatus]
        }>
            {props.children}
        </StatusContext.Provider>
    );
}