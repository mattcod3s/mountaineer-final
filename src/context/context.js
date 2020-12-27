import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';



const initialState =  [];

export const MountaineerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [something, dispatch] = useReducer(contextReducer, initialState);

    return (
        <MountaineerContext.Provider value={{ }}>
            {children}
        </MountaineerContext.Provider>
    )
}