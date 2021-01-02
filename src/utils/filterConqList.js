const filterList = (index, state) => {
    switch (index) {
        case 0:
            state.filter((t) => t.continent !== '');
            break;
        case 1:
            state.filter((t) => t.continent === 'TOP_WORLDWIDE');
            break;
        case 2:
            state.filter((t) => t.continent === 'ASIA');
            break;
        case 3:
            state.filter((t) => t.continent === 'AUSTRALIA');
            break;
        case 4:
            state.filter((t) => t.continent === 'EUROPE');
            break;
        case 5:
            state.filter((t) => t.continent === 'AFRICA');
            break;
        case 6:
            state.filter((t) => t.continent === 'SOUTH_AMERICA');
            break;
        case 7:
            state.filter((t) => t.continent === 'NORTH_AMERICA');
            break;
        default:
            break;
    }
}

export default filterList;