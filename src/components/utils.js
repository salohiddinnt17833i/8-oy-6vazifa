async function getToken() {
    try {
        const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Corrected Content-type to Content-Type
                'Authorization': `Basic ${btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_CLIENT_SECRET)}` // Fixed typo in template literal
            },
            body: "grant_type=client_credentials" 
        });

        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const auth = await resp.json();
        const token = auth.access_token;
        const apiData = OneHour();

        localStorage.setItem('token', token);
        localStorage.setItem('apiData', apiData);

    } catch (error) {
        console.error('Error fetching token:', error);
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
