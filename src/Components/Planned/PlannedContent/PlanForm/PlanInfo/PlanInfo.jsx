import React, {useState, useContext} from 'react';
import {FormStatusContext, FormStatusProvider} from '../../../../../context/context';

const PlanInfo = () => {
    const [formData, setFormData] = useContext(FormStatusContext);

    return (
        <div style={{
            width: '30vw', 
            height: '35vh', 
            background : 'transparent', 
            borderRadius: '15px', 
            boxShadow: 
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            }}>
            
        </div>
    )
}

export default PlanInfo;
