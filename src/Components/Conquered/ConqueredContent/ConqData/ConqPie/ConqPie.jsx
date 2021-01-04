import React, {useState, useEffect} from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTripData from '../../../../../useTripData';
import './conqPieStyles.scss';



const ConqPie = () => {

   
      

    const { total, chartData } = useTripData();

    return (
        <div className='pie__data' >
        <Card className='cardPie__data' >
            <CardHeader /*title={title}*/ />
            <CardContent>
                <Typography variant="h5"></Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
        </div>
        
    )
}

export default ConqPie;
