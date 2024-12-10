import React, { createContext, useContext, useState, useCallback } from 'react';
import { Location, Address } from '../types/location';

interface LocationContextType {
  currentLocation: Location | null;
  selectedAddress: Address | null;
  savedAddresses: Address[];
  setCurrentLocation: (location: Location) => void;
  setSelectedAddress: (address: Address) => void;
  addAddress: (address: Address) => void;
  removeAddress: (id: string) => void;
  toggleFavorite: (id: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);

  const addAddress = useCallback((address: Address) => {
    setSavedAddresses(prev => [...prev, { ...address, id: Date.now().toString() }]);
  }, []);

  const removeAddress = useCallback((id: string) => {
    setSavedAddresses(prev => prev.filter(addr => addr.id !== id));
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setSavedAddresses(prev =>
      prev.map(addr =>
        addr.id === id ? { ...addr, isFavorite: !addr.isFavorite } : addr
      )
    );
  }, []);

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        selectedAddress,
        savedAddresses,
        setCurrentLocation,
        setSelectedAddress,
        addAddress,
        removeAddress,
        toggleFavorite,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};