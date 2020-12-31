import React, {useState, useContext} from 'react';
import {FormStatusContext, FormStatusProvider} from '../../../../../context/context';
import '../planFormStyles.scss';
import globe from '../../../../../Assets/formImg/globe.svg';

const PlanInfo = () => {
    const [formData, setFormData] = useContext(FormStatusContext);

    return (
        <div style={{
            width: '30vw', 
            height: '35vh',  
            borderRadius: '15px', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(211, 209, 209)'
        }}>
            <div style={{
                width: '20vw',
                height: '25vh',
                backgroundImage: `url(${globe})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '40px'
            }} >

            </div>
        </div>
    )
}

export default PlanInfo;
