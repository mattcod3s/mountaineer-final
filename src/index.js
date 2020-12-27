import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, MountaineerContext } from './context/context';

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>
, document.getElementById('root'));
