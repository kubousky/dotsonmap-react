import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactDOM from 'react-dom';
import geoJson from './dots.json';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Vib3Vza3kiLCJhIjoiY2wwd29qOWdkMDhkYzNjcG8xMzF2enoyeSJ9.Qiry2jNpMy859bqVyoRPVg';
//style: 'mapbox://styles/kubousky/cl0wouaj8003e15oznqeryxzq',



const Map = () => {
    const mapContainerRef = useRef(null);
  
    const [lng, setLng] = useState(-87.65);
    const [lat, setLat] = useState(41.84);
    const [zoom, setZoom] = useState(10);
  
    // Initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom,
      });
  
      // Create default markers
      geoJson.features.map((feature) =>
        new mapboxgl.Marker({
            color: "#d63031",
            draggable: false, 
            // img: url("https://www.flaticon.com/free-icons/mountain")
            }).setLngLat(feature.geometry.coordinates).addTo(map)
      );
  
      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  
      map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });
  
      // Clean up on unmount
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    return (
      <div>
        <div className="map-container" ref={mapContainerRef} />
      </div>
    );
  };
  
  export default Map;
  