async function getToken() {
    // function toTimestamp(expDate) {
    //     const dateString = expDate;
    //     const [datePart, timePart] = dateString.split(' ')
    //     const [day, month, year] = datePart.split('.');

    //     const formattedDateString = `${month}/${day}/${year} ${timePart}`
    //     const dateObject = new Date(formattedDateString)
    //     const timestamp = dateObject.getTime();

    //     console.log(10, timestamp);
    //     console.log(11, Date.now());
    //     return timestamp
    // }

    // function isExpiredToken() {
    //     let expireDate = localStorage.getItem('expireDate')
    //     if (!expireDate) {
    //         return true
    //     }

    //     let expDate = toTimestamp(expireDate)
    //     let currentDate = Date.now()
    //     if (expDate < currentDate) {
    //         return true
    //     }

    //     return false;
    // }

    // if (!localStorage.getItem('expireDate') || !localStorage.getItem('token') || isExpiredToken()) {
        if (true) {
        const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_CLIENT_SECRET)}`
            },
            body: "grant_type=client_credentials"
        })
        const auth = await resp.json();
        const expireDate = OneHour();
        localStorage.setItem('expireDate', expireDate);
        localStorage.setItem('token', auth.access_token)

        return {
            date: expireDate,
            token: auth.access_token
        };
    }
}

function OneHour() {
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + 3600000);

    let day = String(currentDate.getDate()).padStart(2, '0');
    let year = currentDate.getFullYear();
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');

    let formattedDateTime = `${day}.${year}.${hours}:${minutes}`;
    return formattedDateTime;
}

export { getToken };