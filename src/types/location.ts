export interface Location {
  lat: number;
  lng: number;
}

export interface Address {
  id?: string;
  type: 'home' | 'office' | 'other';
  houseNumber: string;
  street: string;
  area: string;
  location: Location;
  isFavorite: boolean;
}