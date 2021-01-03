import { useContext, useEffect } from 'react';
import { PlannedTripsContext } from './context/context';

const useTripData = () => {
    const { ConqueredTrips } = useContext(PlannedTripsContext);
    const contCounter = [0,0,0,0,0,0];
    let total = ConqueredTrips.length;
    const sumfunc = () => {
        for(let i = 0; i<=6; i++) {
            let arr = ConqueredTrips.filter((el) => el.continent === continents[i]);
            contCounter[i] = arr.length;
        }
        return contCounter;
    }

    const continents = ['ASIA', 'SOUTH_AMERICA', 'NORTH_AMERICA', 'AUSTRALIA', 'AFRICA', 'EUROPE'];

    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange'];
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