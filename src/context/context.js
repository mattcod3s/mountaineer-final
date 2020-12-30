import React, { useState, createContext, useReducer } from 'react';

import contextReducer from './contextReducer';

const initialState = {
    continent : '',
    mountain : '',
    startDate : '',
    endDate : ''
}

const initialPlannedTrips = [
    {
        id : 1,
        continent : 'dc',
        mountain : 'dsd',
        startDate : 'sds',
        endDate : 'dss'
    }, 
    {
        id : 2,
        continent : 'ds',
        mountain : 'sd',
        startDate : 'sd',
        endDate : 'sd'
    }, 
    {
        id : 3,
        continent : 'ds',
        mountain : 'sd',
        startDate : 'ds',
        endDate : 'ds'
    }
];

export const ConqStatusContext = createContext();

export const ConqStatusProvider = (props) => {

    const [conqStatus, setConqStatus] = useState(false);

    return (
        <ConqStatusContext.Provider value={ [conqStatus, setConqStatus] }>
            {props.children}
        </ConqStatusContext.Provider>
    );
}

export const PlanStatusContext = createContext();

export const PlanStatusProvider = (props) => {

    const [planStatus, setPlanStatus] = useState(false);

    return (
        <PlanStatusContext.Provider value={ [planStatus, setPlanStatus] }>
            {props.children}
        </PlanStatusContext.Provider>
    );
}

export const FormStatusContext = createContext(initialState);

export const FormStatusProvider = (props) => {

    const [formData, setFormData] = useState(initialState);

    return (
        <FormStatusContext.Provider value={ [formData, setFormData] }>
            {props.children}
        </FormStatusContext.Provider>
    );
}


