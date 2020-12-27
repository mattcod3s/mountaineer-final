import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StatusProvider, StatusContext} from './context/context';


ReactDOM.render(
    <StatusProvider>
        <App/>
    </StatusProvider>
, document.getElementById('root'));
