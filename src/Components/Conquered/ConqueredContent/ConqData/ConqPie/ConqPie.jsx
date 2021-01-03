import React, {useState, useEffect} from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTripData from '../../../../../useTripData';


const ConqPie = () => {

    const { total, chartData } = useTripData();
    
    return (
        <Card style={{
            width: '32vw',
            height: '100%',
            background: 'rgb(75, 74, 74)',
            borderRadius: '12px',
            boxShadow: 'rgba(167, 195, 207, 0.25) 0px 25px 50px -10px, rgba(255, 255, 255, 0.3) 0px 15px 30px -15px',
        }}>
            
            <CardHeader /*title={title}*/ />
            <CardContent>
                <Typography variant="h5"></Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default ConqPie;
