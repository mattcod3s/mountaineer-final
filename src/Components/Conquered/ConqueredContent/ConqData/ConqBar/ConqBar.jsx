import React from 'react';
import { Bar } from 'react-chartjs-2';
import useTripData from '../../../../../useTripData';

const ConqBar = () => {

    const { total, chartData } = useTripData();

    return (
        <div style={{
            width: '56vw',
            height: '100%',
            background: 'rgb(75, 74, 74)',
            borderRadius: '12px',
            boxShadow: 'rgba(167, 195, 207, 0.25) 0px 25px 50px -10px, rgba(255, 255, 255, 0.3) 0px 15px 30px -15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{width: '84%', height: '80%'}}>
                <Bar data={chartData}/>
            </div>
        </div>
    )
}

export default ConqBar;
