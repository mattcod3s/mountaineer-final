import React from 'react';
import { Bar } from 'react-chartjs-2';
import useTripData from '../../../../../useTripData';
import './conqBarStyles.scss';


const ConqBar = () => {

    const { total, chartData } = useTripData();

    return (
        <div className='bar__data' >
            <div className='bar'>
                <Bar data={chartData}/>
            </div>
        </div>
    )
}

export default ConqBar;
