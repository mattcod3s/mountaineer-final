

const contextReducer = (state, action) => {
    let plannedTrips;

    switch (action.type) {
        case 'DELETE_TRIP' : 
            plannedTrips = state.filter((t) => t.id !== action.payload );
            localStorage.setItem('initialPlannedTrips', JSON.stringify(plannedTrips));
            return plannedTrips;
        case 'ADD_TRIP' : 
            plannedTrips = [action.payload, ...state];
            localStorage.setItem('initialPlannedTrips', JSON.stringify(plannedTrips));
            return plannedTrips;
        case 'COMPLETE_TRIP' :
            plannedTrips = state.filter((t) => t.id !== action.payload.id );
            localStorage.setItem('initialPlannedTrips', JSON.stringify(plannedTrips));
            return plannedTrips;
        default : 
            return state;

    }

} 

export default contextReducer;