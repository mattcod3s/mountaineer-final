import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PlanStatusProvider,  ConqStatusProvider, FormStatusProvider, PlannedTripsProvider } from './context/context';


ReactDOM.render(
    <FormStatusProvider>
        <PlannedTripsProvider>
            <PlanStatusProvider>
                <ConqStatusProvider>
                    <App/>
                </ConqStatusProvider>
            </PlanStatusProvider>
        </PlannedTripsProvider>
    </FormStatusProvider>
, document.getElementById('root'));
