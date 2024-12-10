import React, { useState, useEffect } from 'react';
import { LocationPermissionModal } from './components/LocationPermissionModal';
import { Map } from './components/Map';
import { AddressForm } from './components/AddressForm';
import { LocationProvider, useLocation } from './context/LocationContext';
import { toast, Toaster } from 'react-hot-toast';

function App() {
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { setCurrentLocation, addAddress } = useLocation();

  const handleEnableLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentLocation(location);
          setShowPermissionModal(false);
          setShowAddressForm(true);
          toast.success('Location accessed successfully!');
        },
        () => {
          toast.error('Unable to access location. Please try searching manually.');
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser');
    }
  };

  const handleSearchManually = () => {
    setShowPermissionModal(false);
    setShowAddressForm(true);
    // Set a default location (e.g., city center)
    setCurrentLocation({ lat: 51.5074, lng: -0.1278 });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-center" />
      
      {showPermissionModal && (
        <LocationPermissionModal
          onEnableLocation={handleEnableLocation}
          onSearchManually={handleSearchManually}
        />
      )}

      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Set Delivery Location</h1>
        
        {showAddressForm && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Map
              center={{ lat: 51.5074, lng: -0.1278 }}
              onMarkerDragEnd={(location) => setCurrentLocation(location)}
            />
            <AddressForm
              initialLocation={{ lat: 51.5074, lng: -0.1278 }}
              onSubmit={(address) => {
                addAddress(address);
                toast.success('Address saved successfully!');
                setShowAddressForm(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <LocationProvider>
      <App />
    </LocationProvider>
  );
}