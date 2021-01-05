import React, { useContext } from 'react';
import { FormStatusContext } from '../../../../../context/context';
import './planInfoStyles.scss';
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
        <div className={'info__wrapper'}>
            <div className={'info__content'} style={{
                backgroundImage: `url(${currentImage})`,
            }} >

            </div>
        </div>
    )
}

export default PlanInfo;
