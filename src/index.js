import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ActiveTripsProvider,PlanStatusProvider,  ConqStatusProvider, FormStatusProvider, PlannedTripsProvider, ConqListProvider, PercentLoaderProvider } from './context/context';


ReactDOM.render(
    <FormStatusProvider>
        <ConqListProvider>
            <PlannedTripsProvider>
                <ActiveTripsProvider>
                    <PercentLoaderProvider>
                        <PlanStatusProvider>
                            <ConqStatusProvider>
                                <App/>
                            </ConqStatusProvider>
                        </PlanStatusProvider>
                    </PercentLoaderProvider>
                </ActiveTripsProvider>
            </PlannedTripsProvider>
        </ConqListProvider>
    </FormStatusProvider>
, document.getElementById('root'));
