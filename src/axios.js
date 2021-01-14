import React, {useContext} from 'react';
import axios from 'axios';


const getDataCall = (lat, long) => {
    

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxy}https://api.darksky.net/forecast/e4d88e9928e57d49d1dd1c799043d598/${lat},${long}`;
        
        axios.get(`${url}`)
        .then((data) => {
            
            const timezone   = data.data.timezone;
            const temperature = data.data.currently.temperature;
            const humidity  = data.data.currently.humidity;
            const icon  = data.data.currently.icon;
            const precipProbability = data.data.currently.precipProbability;
            const precipIntensity  = data.data.currently.precipIntensity;
            const windSpeed = data.data.currently.windSpeed;
            console.log(timezone, temperature);

            
        })
        .catch((error) => {
            console.log(error);
        })
    }


export default getDataCall;
