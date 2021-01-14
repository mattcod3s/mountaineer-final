import React, {useContext} from 'react';
import axios from 'axios';


const getDataCall = (lat, long) => {
    

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxy}https://api.darksky.net/forecast/e4d88e9928e57d49d1dd1c799043d598/${lat},${long}`;
        
        axios.get(`${url}`)
        .then((data) => {
            
            console.log(data.data)
            
        })
        .catch((error) => {
            console.log(error);
        })
    }


export default getDataCall;
