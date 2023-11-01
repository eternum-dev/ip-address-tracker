/**
 * 
 * @param {String} ipAddress 
 */
export const toLocaleByIP = async (ipAddress) => {

    const apiKey = import.meta.env.VITE_APIKEY;

    const fetchIP = async (url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('algo salio mal')
                }
                return response.json()
            }).then(data => {
                return data
            }).catch(error => {
                console.log(error);
            })
    }

    if (!ipAddress) {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
        return fetchIP(url)
    }

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    return fetchIP(url);
}