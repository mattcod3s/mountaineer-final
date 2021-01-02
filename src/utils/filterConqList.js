const filterList = (index, state) => {
    let activeTrips = [...state];

    switch (index) {
        case 1:
            activeTrips = state.filter((t) => t.continent === 'TOP_WORLDWIDE');
            
            return activeTrips;
        case 2:
            activeTrips = state.filter((t) => t.continent === 'ASIA');
            
            return activeTrips;
        case 3:
            activeTrips = state.filter((t) => t.continent === 'AUSTRALIA');
            
            return activeTrips;
        case 4:
            activeTrips = state.filter((t) => t.continent === 'EUROPE');
            
            return activeTrips;
        case 5:
            activeTrips = state.filter((t) => t.continent === 'AFRICA');
            
            return activeTrips;
        case 6:
            activeTrips = state.filter((t) => t.continent === 'SOUTH_AMERICA');
            
            return activeTrips;
        case 7:
            activeTrips = state.filter((t) => t.continent === 'NORTH_AMERICA');
            
            return activeTrips;
        default:
            
        return activeTrips;
    }
}

export default filterList;