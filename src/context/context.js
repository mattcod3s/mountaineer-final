import React, { useState, createContext, useReducer } from 'react';


const initialState = {
    continent : '',
    mountain : '',
    startDate : '',
    endDate : ''
}


const initialPlannedTrips = [
    {
        id : 1,
        continent : 'australia',
        mountain : 'sum',
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
    },
    {
        id : 4,
        continent : 'ds',
        mountain : 'sd',
        startDate : 'ds',
        endDate : 'ds'
    },
    {
        id : 5,
        continent : 'ds',
        mountain : 'sd',
        startDate : 'ds',
        endDate : 'ds'
    },
    {
        id : 6,
        continent : 'ds',
        mountain : 'sd',
        startDate : 'ds',
        endDate : 'ds'
    },
    {
        id : 7,
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

export const PlannedTripsContext = createContext(initialState);


export const PlannedTripsProvider = (props) => {

    const [plannedTrips, setPlannedTrips] = useState(initialPlannedTrips);

    return (
        <PlannedTripsContext.Provider value={ [plannedTrips, setPlannedTrips] }>
            {props.children}
        </PlannedTripsContext.Provider>
    );
}
