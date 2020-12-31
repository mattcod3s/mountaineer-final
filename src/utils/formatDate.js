

const formatDate = (startDate, endDate) => {

    const s = new Date(startDate);
    const e = new Date(endDate);

    const monthS = `${s.getMonth() + 1}`;
    const dayS = `${s.getDate()}`;
    const yearS = `${s.getFullYear()}`;

    const monthE = `${e.getMonth() + 1}`;
    const dayE = `${e.getDate()}`;
    const yearE = `${e.getFullYear()}`;

    if ( dayE < dayS) {
        console.log('err');
    }
}

export default formatDate;