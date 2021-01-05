import React, { useContext } from 'react';
import './app.scss';
import './reset.css';
import Main from './Components/Main/Main';
import Conquered from './Components/Conquered/Conquered';
import Planned from './Components/Planned/Planned';
import { PlanStatusContext, ConqStatusContext } from './context/context';
import Layer from './Components/Layer/Layer';


const App = () => {
    document.addEventListener('touchstart', {passive: true});
    
    const [conqStatus, setConqStatus] = useContext(ConqStatusContext);
    
    const [planStatus, setPlanStatus] = useContext(PlanStatusContext);


    return (
        <div className="app">
                <Main />
                <Planned isPlanActive={planStatus} />
                <Conquered isConqActive={conqStatus} />
                <Layer isConqActive={conqStatus} isPlanActive={planStatus}/>
        </div>
    )
}

export default App;
