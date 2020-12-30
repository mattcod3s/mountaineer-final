import React, { useState, createContext, useReducer } from 'react';
import contextReducer from './contextReducer';


const initialState = {
    id : '',
    continent : '',
    mountain : '',
    startDate : '',
    endDate : ''
}


const initialPlannedTrips = [
    {
        id : 6,
        continent : 'ASIA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020'
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

export const PlannedTripsContext = createContext(initialPlannedTrips);


export const PlannedTripsProvider = (props) => {
/*
    const [plannedTrips, setPlannedTrips] = useState(initialPlannedTrips);

    return (
        <PlannedTripsContext.Provider value={ [plannedTrips, setPlannedTrips] }>
            {props.children}
        </PlannedTripsContext.Provider>
    );*/
    const [plannedTrips, dispatch] = useReducer(contextReducer, initialPlannedTrips);

    const deleteTrip = (id) => {
        dispatch({ type : 'DELETE_TRIP', payload : id});
    }

    const addTrip = (trip) => {
        dispatch({ type : 'ADD_TRIP', payload : trip });
    }

    return (
        <PlannedTripsContext.Provider value={{ 
            deleteTrip, 
            addTrip, 
            plannedTrips
        }}>
            {props.children}
        </PlannedTripsContext.Provider>
    )
}


export const TripActionsContext = createContext(initialPlannedTrips);

export const TripActionProvider = (props) => {
    const [plannedAdventures, dispatch] = useReducer(contextReducer, initialPlannedTrips);

    const deleteTrip = (id) => {
        dispatch({ type : 'DELETE_TRIP', payload : id});
    }

    const addTrip = (trip) => {
        dispatch({ type : 'ADD_TRIP', payload : trip });
    }

    return (
        <TripActionsContext.Provider value={{ 
            deleteTrip, 
            addTrip, 
            plannedAdventures
        }}>
            {props.children}
        </TripActionsContext.Provider>
    )
}