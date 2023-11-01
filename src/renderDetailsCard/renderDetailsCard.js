import './renderDetailsCard.css';

/**
 * Renderiza una card con la informacion obtenida con la IP.
 * @param {data} data para renderizar la tarjeta.
 * @param {string} data.ip - Dirección IP.
 * @param {string} data.isp - Proveedor de servicios de Internet (ISP).
 * @param {Object} data.location - Información de ubicación.  { country, city, timeZone }.
 * @param {Object} data.as - Información del sistema autónomo.  { asn }.
 */
export const renderDetailsCard = ({ ip, isp, location, as }) => {

    const secctionTop = document.querySelector('.section-top');

    const city = location.city;
    const country = location.country;
    const timezone = location.timezone
    const asn = as.asn;

    let detailsCard = document.createElement('article');
    detailsCard.classList.add('details');

    detailsCard.innerHTML = `
        <div class="details__wrapper">
            <h3 class="details__title">IP Address</h3>
            <span class="details__result">${ip}</span>
        </div>
        <span class="detail__hr"></span>
        <div class="details__wrapper">
            <h3 class="details__title">Location</h3>
            <span class="details__result">${city}, ${country} ${asn}</span>
        </div>
        <span class="detail__hr"></span>
        <div class="details__wrapper">
            <h3 class="details__title">Timezone</h3>
            <span class="details__result">UTC ${timezone}</span>
        </div>
        <span class="detail__hr"></span>
        <div class="details__wrapper">
            <h3 class="details__title">ISP</h3>
            <span class="details__result">${isp}</span>
        </div>
        `
    secctionTop.append(detailsCard);
}
