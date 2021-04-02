import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';



mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaXlhaHNlIiwiYSI6ImNrbXNuMW5xOTBqZjAycXMwaGhxeHBzMHoifQ.uWiRY2P_m9ByEd69A8N_PQ';


const Globe = () => {
    const mapContainer = useRef();
    const [lng, setLng] = useState(44.337023);
    const [lat, setLat] = useState(27.489940);
    const [zoom, setZoom] = useState(3);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/josiyahse/ckmuo0ox156j417o5jm97lg2e',
            center: [lng, lat],
            zoom: zoom
        });
        return () => map.remove();
    }, []);
    
   return (
       <div>
           <div className="map-container" ref={mapContainer} />
       </div>
   )
        
};
ReactDOM.render(<Globe/>, document.getElementById('map'));
export default Globe;