import React, { useContext, useState } from 'react';
import './app.scss';
import './reset.css';
import Main from './Components/Main/Main';
import Conquered from './Components/Conquered/Conquered';
import Planned from './Components/Planned/Planned';
import {StatusProvider, StatusContext} from './context/context';


const App = () => {

    
    const [conqStatus, setConqStatus] = useContext(StatusContext);
    
    const [planStatus, setPlanStatus] = useContext(StatusContext);


    return (
        <div className="app">
                <Main />
                <Planned isActive={conqStatus}/>
                <Conquered isActive={planStatus}/>
        </div>
    )
}

export default App;
