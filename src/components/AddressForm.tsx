import React, { useState } from 'react';
import { Home, Building2, Users } from 'lucide-react';
import { Address } from '../types/location';
import { useLocation } from '../context/LocationContext';

interface AddressFormProps {
  initialLocation: { lat: number; lng: number };
  onSubmit: (address: Address) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({ initialLocation, onSubmit }) => {
  const [formData, setFormData] = useState({
    type: 'home' as const,
    houseNumber: '',
    street: '',
    area: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      location: initialLocation,
      isFavorite: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, type: 'home' }))}
          className={`p-4 rounded-lg flex flex-col items-center gap-2 ${
            formData.type === 'home' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
          }`}
        >
          <Home size={24} />
          <span>Home</span>
        </button>
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, type: 'office' }))}
          className={`p-4 rounded-lg flex flex-col items-center gap-2 ${
            formData.type === 'office' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
          }`}
        >
          <Building2 size={24} />
          <span>Office</span>
        </button>
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, type: 'other' }))}
          className={`p-4 rounded-lg flex flex-col items-center gap-2 ${
            formData.type === 'other' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
          }`}
        >
          <Users size={24} />
          <span>Other</span>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">House/Flat/Block No.</label>
          <input
            type="text"
            value={formData.houseNumber}
            onChange={e => setFormData(prev => ({ ...prev, houseNumber: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Street/Road</label>
          <input
            type="text"
            value={formData.street}
            onChange={e => setFormData(prev => ({ ...prev, street: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Area</label>
          <input
            type="text"
            value={formData.area}
            onChange={e => setFormData(prev => ({ ...prev, area: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Address
      </button>
    </form>
  );
};