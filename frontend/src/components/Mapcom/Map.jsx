import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import 'mapbox-gl/dist/mapbox-gl.css'
import places from '../../data/hiking.json'

mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlja21vbnRnb21lcnkxOTk5IiwiYSI6ImNsMnpiaGk4dDA5MDQzaW1xN2k0cGZlaTQifQ.NwaR6nAHCVI4q8TFXzL7Vg';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-4.20265);
    const [lat, setLat] = useState(57);
    const [zoom, setZoom] = useState(5.75);

    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

     
    useEffect(() => {
        if(!user) {
            return
          }

        const marker_name = 'Avimore'
        const marker_name2 = 'Loch Lomond'

        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
            });
            
            // Place each marker
            places.map(location => {
                return (new mapboxgl.Marker({
                    color: "rgb(0, 94, 184)"
                })
                    .setLngLat([location.longitude, location.lattidue])
                    .setPopup(new mapboxgl.Popup().setHTML('<h1>' + location.name + '</h1>'))
                    .addTo(map.current))
            });      
            
        });
     
    useEffect(() => {
        if(!user) {
            return
          }



        if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            });
        });
        
    return (
    <div>
        <div>
        </div>
        <div ref={mapContainer} className="map-container" />
    </div>
    );
}