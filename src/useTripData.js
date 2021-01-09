import { useContext, useEffect } from 'react';
import { PlannedTripsContext } from './context/context';

const useTripData = () => {
    const { initialLocalDataTwo } = useContext(PlannedTripsContext);
    const contCounter = [0,0,0,0,0,0];
    let total = initialLocalDataTwo.length;
    const sumfunc = () => {
        for(let i = 0; i<=6; i++) {
            let arr = initialLocalDataTwo.filter((el) => el.continent === continents[i]);
            contCounter[i] = arr.length;
        }
        return contCounter;
    }

    const continents = ['ASIA', 'SOUTH_AMERICA', 'NORTH_AMERICA', 'AUSTRALIA', 'AFRICA', 'EUROPE'];

    const colors = ['#8577BD', '#544C78', '#AE9CF7', '#9C8CDE', '#576FF7', '#4254BD'];
    const chartData = {
        datasets : [{
            data : sumfunc(),
            backgroundColor : colors.map((c) => c)
        }],
        labels : continents.map((c) => c)
    };
    return { total, chartData };
}

export default useTripData;