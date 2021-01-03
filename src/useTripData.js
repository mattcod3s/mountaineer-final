import { useContext } from 'react';
import { PlannedTripsContext } from './context/context';

const useTripData = () => {

    const { ConqueredTrips } = useContext(PlannedTripsContext);
    let total = ConqueredTrips.length;

    const contCounter = [5,8,9,2,0,0];

    const continents = ['ASIA', 'SOUTH_AMERICA', 'NORTH_AMERICA', 'AUSTRALIA', 'AFRICA', 'EUROPE'];

    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange'];
    const chartData = {
        datasets : [{
            data : contCounter.map((t) => t),
            backgroundColor : colors.map((c) => c)
        }],
        labels : continents.map((c) => c)
    };
    return { total, chartData };
}

export default useTripData;