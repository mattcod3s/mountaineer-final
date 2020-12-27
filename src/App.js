import React from 'react';
import './app.scss';
import './reset.css';
import Main from './Components/Main/Main';
import Conquered from './Components/Conquered/Conquered';
import Planned from './Components/Planned/Planned';



const App = () => {
    return (
        <div className="app">
            <Main />
            <Planned isActive={false}/>
            <Conquered isActive={false}/>
        </div>
    )
}

export default App;
