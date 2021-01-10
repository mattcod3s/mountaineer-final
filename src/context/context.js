import React, { useState, createContext, useReducer } from 'react';
import contextReducer from './contextReducer';
import globe from '../Assets/formImg/globe.svg';


const initialState = {
    id : '',
    continent : '',
    mountain : '',
    startDate : '01/01/2021',
    endDate : '01/01/2021',
    img: globe
}


const initialPlannedTrips = [
    {
        id : 2,
        continent : 'ASIA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
    {
        id : 5,
        continent : 'SOUTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
    {
        id : 9,
        continent : 'SOUTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
    {
        id : 12,
        continent : 'EUROPE',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 

];

const ConqueredTrips = [
    {
        id : 31,
        continent : 'ASIA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    },
    {
        id : 32,
        continent : 'NORTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    },
    {
        id : 33,
        continent : 'NORTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    },
    {
        id : 34,
        continent : 'EUROPE',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    },
    {
        id : 35,
        continent : 'EUROPE',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    },
    {
        id : 36,
        continent : 'AFRICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    },
    {
        id : 9343443,
        continent : 'SOUTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
    {
        id : 98683,
        continent : 'SOUTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
    {
        id : 90272,
        continent : 'SOUTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
    {
        id : 15,
        continent : 'SOUTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
    {
        id : 19,
        continent : 'SOUTH_AMERICA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }, 
];

const initialLocalDataOne = JSON.parse(localStorage.getItem('initialPlannedTrips')) || [];
const initialLocalDataTwo = JSON.parse(localStorage.getItem('ConqueredTrips')) || [];

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

export const PlannedTripsContext = createContext(initialLocalDataOne);


export const PlannedTripsProvider = (props) => {
    const [plannedTrips, dispatch] = useReducer(contextReducer, initialLocalDataOne);

    const deleteTrip = (id) => {
        dispatch({ type : 'DELETE_TRIP', payload : id});
    }

    const addTrip = (trip) => {
        dispatch({ type : 'ADD_TRIP', payload : trip });
    }

    const completeTrip = (trip) => {
        dispatch({type : 'COMPLETE_TRIP', payload : trip});
        ConqueredTrips.push(trip);
        localStorage.setItem('ConqueredTrips', JSON.stringify(ConqueredTrips));
    }

    return (
        <PlannedTripsContext.Provider value={{ 
            deleteTrip, 
            addTrip, 
            plannedTrips,
            completeTrip,
            ConqueredTrips, 
            initialLocalDataTwo
        }}>
            {props.children}
        </PlannedTripsContext.Provider>
    )
}

export const ConqListContext = createContext();

export const ConqListProvider = (props) => {
    const [index, setIndex] = useState(0);

    return (
        <ConqListContext.Provider value={ [index, setIndex] }>
            {props.children}
        </ConqListContext.Provider>
    );
}

export const PercentLoaderContext = createContext();

export const PercentLoaderProvider = (props) => {
    const [progressPercent, setProgressPercent] = useState(33);

    return (
        <PercentLoaderContext.Provider value={ [progressPercent, setProgressPercent] }>
            {props.children}
        </PercentLoaderContext.Provider>
    );
}

export const ActiveTripsContext = createContext();

export const ActiveTripsProvider = (props) => {
    const [activeTrips, setActiveTrips] = useState(ConqueredTrips);
    
    return (
        <ActiveTripsContext.Provider value={ [activeTrips, setActiveTrips] }>
            {props.children}
        </ActiveTripsContext.Provider>
    );
}