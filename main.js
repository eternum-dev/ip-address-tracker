import { renderDetailsCard } from './src/renderDetailsCard/renderDetailsCard';
import { getMapByCord } from './src/use-cases/getMapByCord';
import { toLocaleByIP } from './src/use-cases/toLocaleByIP';
import './style.css';


const data = await toLocaleByIP();
const lat = data.location.lat;
const lng = data.location.lng;

const { createMap, updateMap } = getMapByCord();
createMap(lat, lng);
renderDetailsCard(data);

const btnSubmit = document.querySelector('.home__button');

btnSubmit.addEventListener('click', async (event) => {
    event.preventDefault();

    const inpValue = document.querySelector('.home__input').value;

    toLocaleByIP(inpValue)
        .then(newData => {
            updateMap(newData.location.lat, newData.location.lng);
            console.log(newData);
            renderDetailsCard(newData);
        });
});






