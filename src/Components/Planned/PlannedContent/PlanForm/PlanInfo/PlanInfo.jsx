import React, {useState, useContext} from 'react';
import {FormStatusContext, FormStatusProvider} from '../../../../../context/context';
import '../planFormStyles.scss';
import globe from '../../../../../Assets/formImg/globe.svg';
import asia from '../../../../../Assets/formImg/asia.svg';
import africa from '../../../../../Assets/formImg/africa.svg';
import northAmerica from '../../../../../Assets/formImg/north-america.svg';
import southAmerica from '../../../../../Assets/formImg/south-america.svg';
import australia from '../../../../../Assets/formImg/australia.svg';
import europe from '../../../../../Assets/formImg/europe.svg';

const PlanInfo = () => {
    const [formData, setFormData] = useContext(FormStatusContext);
    let currentImage;
    
    switch (formData.continent) {
        case 'SOUTH_AMERICA':
            currentImage = southAmerica;
            break;
        case 'NORTH_AMERICA':
            currentImage = northAmerica;
            break;
        case 'ASIA':
            currentImage = asia;
            break;
        case 'AFRICA':
            currentImage = africa;
            break;
        case 'AUSTRALIA':
            currentImage = australia;
            break;
        case 'EUROPE':
            currentImage = europe;
            break;
        default:
            currentImage = globe;
            break;
    }

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
                backgroundImage: `url(${currentImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '40px',
                transitionDuration: '0.25s'
            }} >

            </div>
        </div>
    )
}

export default PlanInfo;
