import React, {useState, useEffect} from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTripData from '../../../../../useTripData';



const ConqPie = () => {

   
      

    const { total, chartData } = useTripData();

    return (
        <div style={{
            width: '32vw',
            height: '90%',
            background: 'white',
            borderRadius: '12px',
            boxShadow: 'rgba(167, 195, 207, 0.25) 0px 25px 50px -10px, rgba(255, 255, 255, 0.3) 0px 15px 30px -15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <Card style={{width: '32vw',
            height: '90%',background: 'transparent', boxShadow: '0 0 0 0'}}>
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
