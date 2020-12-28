import React from 'react';
import './layerStyles.scss';

const Layer = ({isConqActive, isPlanActive}) => {
    let currentClass;
    if (isConqActive) {
        currentClass = 'layer_active_conq';
    } else if (isPlanActive) {
        currentClass = 'layer_active_plan';
    } else {
        currentClass = 'layer';
    }
    
    return (
        <div className={currentClass}>
            
        </div>
    )
}

export default Layer;
