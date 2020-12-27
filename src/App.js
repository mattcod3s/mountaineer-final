import React, { useContext, useState } from 'react';
import './app.scss';
import './reset.css';
import Main from './Components/Main/Main';
import Conquered from './Components/Conquered/Conquered';
import Planned from './Components/Planned/Planned';
import { PlanStatusProvider, PlanStatusContext, ConqStatusProvider, ConqStatusContext } from './context/context';

const App = () => {

    
    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    
    const [planStatus, setPlanStatus] = useContext(PlanStatusContext);


    return (
        <div className="app">
                <Main />
                <Planned isPlanActive={planStatus}/>
                <Conquered isConqActive={conqStatus}/>
        </div>
    )
}

export default App;
