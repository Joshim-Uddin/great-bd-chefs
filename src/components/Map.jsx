import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";

import LocationMarker from "./LocationMarker";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={{ lat: 23.8103, lng: 90.4125 }}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
