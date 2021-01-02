import React, { useState, createContext, useReducer } from 'react';
import contextReducer from './contextReducer';
import globe from '../Assets/formImg/globe.svg';
import asia from '../Assets/formImg/asia.svg';
import africa from '../Assets/formImg/africa.svg';
import northAmerica from '../Assets/formImg/north-america.svg';
import southAmerica from '../Assets/formImg/south-america.svg';
import australia from '../Assets/formImg/australia.svg';
import europe from '../Assets/formImg/europe.svg';




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
        id : 6,
        continent : 'ASIA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
    }
];

const ConqueredTrips = [
    {
        id : 6,
        continent : 'ASIA',
        mountain : 'MOUNT EVEREST',
        startDate : '10-12-2020',
        endDate : '20-12-2020',
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
    const [plannedTrips, dispatch] = useReducer(contextReducer, initialPlannedTrips);
    const [completedTrip] = useReducer(contextReducer, initialPlannedTrips);

    const deleteTrip = (id) => {
        dispatch({ type : 'DELETE_TRIP', payload : id});
    }

    const addTrip = (trip) => {
        dispatch({ type : 'ADD_TRIP', payload : trip });
    }

    const completeTrip = (trip) => {
        dispatch({type : 'COMPLETE_TRIP', payload : trip});
        ConqueredTrips.push(trip);
    }

    return (
        <PlannedTripsContext.Provider value={{ 
            deleteTrip, 
            addTrip, 
            plannedTrips,
            completeTrip,
            ConqueredTrips
        }}>
            {props.children}
        </PlannedTripsContext.Provider>
    )
}

export const ConqListContext = createContext();

export const ConqListProvider = (props) => {
    const [conqIndex, setConqIndex] = useState(0);

    return (
        <ConqListContext.Provider value={ [conqIndex, setConqIndex] }>
            {props.children}
        </ConqListContext.Provider>
    );
}

/*
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
}*/