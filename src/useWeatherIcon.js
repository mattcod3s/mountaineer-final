import { useContext, useEffect } from 'react';
import cloudyDay1 from './Assets/animated/cloudy-day-1.svg';
import cloudyDay2 from './Assets/animated/cloudy-day-2.svg';
import cloudyDay3 from './Assets/animated/cloudy-day-3.svg';
import cloudyNight1 from './Assets/animated/cloudy-night-1.svg';
import cloudyNight2 from './Assets/animated/cloudy-night-2.svg';
import cloudyNight3 from './Assets/animated/cloudy-night-3.svg';
import cloudy from './Assets/animated/cloudy.svg';
import day from './Assets/animated/day.svg';
import rainy1 from './Assets/animated/rainy-1.svg';
import rainy2 from './Assets/animated/rainy-2.svg';
import rainy3 from './Assets/animated/rainy-3.svg';
import rainy4 from './Assets/animated/rainy-4.svg';
import rainy5 from './Assets/animated/rainy-5.svg';
import rainy6 from './Assets/animated/rainy-6.svg';
import rainy7 from './Assets/animated/rainy-7.svg';
import snowy1 from './Assets/animated/snowy-1.svg';
import snowy2 from './Assets/animated/snowy-2.svg';
import snowy3 from './Assets/animated/snowy-3.svg';
import snowy4 from './Assets/animated/snowy-4.svg';
import snowy5 from './Assets/animated/snowy-5.svg';
import snowy6 from './Assets/animated/snowy-6.svg';

const useTripData = () => {
    let iconArr = [cloudyDay1, cloudyDay2, cloudyDay3, cloudyNight1, cloudyNight2, cloudyNight3, cloudy,
    day, rainy1, rainy2, rainy3, rainy4, rainy5, rainy6, rainy7, snowy1, snowy2, snowy3, snowy4,
    snowy5, snowy6];
    let currIconNum = Math.floor(Math.random() * 21);
    let currWeatherIcon = iconArr[currIconNum];
    return {currWeatherIcon}
}

export default useTripData;