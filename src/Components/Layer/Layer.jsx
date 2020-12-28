import React from 'react';
import './layerStyles.scss';

const Layer = ({isConqActive, isPlanActive}) => {
    return (
        <div className={isConqActive || isPlanActive ? 'layer_active' : 'layer'}>
            
        </div>
    )
}

export default Layer;
