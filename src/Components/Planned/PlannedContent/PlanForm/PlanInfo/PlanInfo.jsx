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
        }}>
            
        </div>
    )
}

export default PlanInfo;
