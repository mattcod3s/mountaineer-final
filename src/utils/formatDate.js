

const formatDate = (startDate, endDate) => {

    let isError;

    const s = new Date(startDate);
    const e = new Date(endDate);

    const monthS = `${s.getMonth() + 1}`;
    const dayS = `${s.getDate()}`;
    const yearS = `${s.getFullYear()}`;

    const monthE = `${e.getMonth() + 1}`;
    const dayE = `${e.getDate()}`;
    const yearE = `${e.getFullYear()}`;

    if (parseInt(yearE, 10) > parseInt(yearS, 10)) {
        isError = false;
    } else if (parseInt(monthE, 10) > parseInt(monthS, 10)) {
        isError = false;
    } else if ( parseInt(dayE, 10) > parseInt(dayS, 10)) {
        isError = false;
    } else if (parseInt(dayS, 10) > parseInt(dayE, 10)){
        isError = true;
    }

    return isError;
}

export default formatDate;