/**
 * crea y actaliza el mapa 
 * @returns  createMap(), updateMap()
 */
export const getMapByCord = () => {

    let map;
    let markerIcon = L.icon({
        iconUrl: 'src/images/icon-location.svg',
        iconSize: [50, 60],
    });

    /**
     *  Crea el mapa y agrega el marker en las cordenas [lat, lng]
     * @param {String} lat  latitud
     * @param {String} lng longitud
     */
    const createMap = (lat, lng) => {
        map = L.map('map').setView([lat, lng], 15);
        map.removeControl(map.zoomControl);
        
        L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
            minZoom: 0,
            maxZoom: 20,
            attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            ext: 'png'
        }).addTo(map);

        L.marker([lat, lng], { icon: markerIcon }).addTo(map);
    }

    /**
    * Redirecciona el mapa y agrega un marker en las nuevas cordenas [lat, lng]
    * @param {String} lat  latitud
    * @param {String} lng longitud
    */
    const updateMap = (lat, lng) => {
        map.flyTo([lat, lng], 13);
        L.marker([lat, lng], { icon: markerIcon }).addTo(map);

    }

    return {
        createMap,
        updateMap
    }
}
