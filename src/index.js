import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PlanStatusProvider,  ConqStatusProvider, FormStatusProvider, PlannedTripsProvider, ConqListProvider } from './context/context';


ReactDOM.render(
    <FormStatusProvider>
        <ConqListProvider>
            <PlannedTripsProvider>
                <PlanStatusProvider>
                    <ConqStatusProvider>
                        <App/>
                    </ConqStatusProvider>
                </PlanStatusProvider>
            </PlannedTripsProvider>
        </ConqListProvider>
    </FormStatusProvider>
, document.getElementById('root'));
