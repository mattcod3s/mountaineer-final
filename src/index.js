import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PlanStatusProvider, PlanStatusContext, ConqStatusProvider, ConqStatusContext } from './context/context';


ReactDOM.render(
    <PlanStatusProvider>
        <ConqStatusProvider>
            <App/>
        </ConqStatusProvider>
    </PlanStatusProvider>
, document.getElementById('root'));
