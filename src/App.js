import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Importar o CSS do Leaflet
import countries from './countries.json';
import curiosities from './curiosities.js';

function App() {
  function onEachCountry(feature, layer) {
    if (feature.properties && feature.properties.name) {
      const countryName = feature.properties.name;
      const curiosity = curiosities[countryName] || 'Nenhuma curiosidade disponível.';
      layer.bindPopup(`<b>${countryName}</b><br>${curiosity}`);
    }
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <GeoJSON data={countries} onEachFeature={onEachCountry} />
      </MapContainer>
    </div>
  );
}

export default App;
