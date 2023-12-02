import React, { useState } from 'react';
import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import flagemojiToPNG from '../utils/helper';

function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { cities } = useCities();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');


  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>
                <img src={flagemojiToPNG(city.emoji)} alt="" />
              </span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
