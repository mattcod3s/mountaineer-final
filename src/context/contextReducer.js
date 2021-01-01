const contextReducer = (state, action) => {

    let plannedTrips;
    let completedTrip;

    switch (action.type) {
        case 'DELETE_TRIP' : 
            plannedTrips = state.filter((t) => t.id !== action.payload );

            return plannedTrips;
        case 'ADD_TRIP' : 
            plannedTrips = [action.payload, ...state];

            return plannedTrips;
        case 'PAUSE_TRIP' :
            plannedTrips = state.filter((t) => t.id !== action.payload );
            return plannedTrips;
        case 'COMPLETE_TRIP' :
            completedTrip = [action.payload];
        default : 
            return state;

    }

} 

export default contextReducer;