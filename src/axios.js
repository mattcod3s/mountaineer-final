import React from 'react';
import axios from 'axios';

 const getDataCall = (lat, long) => {
    /*const apiKey = `89705b6239360f7f8d9608601a0505d5`;
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;*/

    

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxy}https://api.darksky.net/forecast/e4d88e9928e57d49d1dd1c799043d598/${lat},${long}`;

    
        axios.get(`${url}`)
        .then((data) => {
            const { timezone }  = data.data;
            const {temperature} = data.data.currently;
            console.log(data, timezone, temperature);
            
        })
        .catch((error) => {
            console.log(error);
        })
    
}

export default getDataCall;
