import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../config/maps';

interface MapProps {
  center: { lat: number; lng: number };
  onMarkerDragEnd: (location: { lat: number; lng: number }) => void;
}

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = { lat: 51.5074, lng: -0.1278 }; // London coordinates as fallback

export const Map: React.FC<MapProps> = ({ center = defaultCenter, onMarkerDragEnd }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY || ''
  });

  if (loadError) {
    return (
      <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <p className="text-red-500">
          Error loading Google Maps. Please check your API key.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      <Marker
        position={center}
        draggable={true}
        onDragEnd={(e) => {
          if (e.latLng) {
            onMarkerDragEnd({
              lat: e.latLng.lat(),
              lng: e.latLng.lng()
            });
          }
        }}
      />
    </GoogleMap>
  );
};