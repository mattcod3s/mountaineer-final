const contextReducer = (state, action) => {

    let plannedTrips;

    switch (action.type) {
        case 'DELETE_TRIP' : 
            plannedTrips = state.filter((t) => t.id !== action.payload );

            return plannedTrips;
        case 'ADD_TRIP' : 
            plannedTrips = [action.payload, ...state];

            return plannedTrips;
        default : 
            return state;

    }

} 

export default contextReducer;