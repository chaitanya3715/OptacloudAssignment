# Location/Address Flow Application

A modern, user-friendly location and address management system built with React and Google Maps API.

## Features

- 📍 Location permission handling
- 🗺️ Interactive map with draggable markers
- 📝 Address form with type selection (Home, Office, Other)
- 💾 Address saving and management
- 🌟 Favorite address marking
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS

## Prerequisites

Before running this project, make sure you have:

1. Node.js (v14 or higher)
2. A Google Maps API key with Maps JavaScript API enabled 
3. npm or yarn package manager

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd location-address-flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Google Maps API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```
   
   > **Important**: Make sure to:
   > - Enable the Maps JavaScript API in your Google Cloud Console
   > - Create credentials (API key) with appropriate restrictions
   > - Never commit your API key to version control

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── AddressForm.tsx
│   ├── LocationPermissionModal.tsx
│   └── Map.tsx
├── config/
│   └── maps.ts
├── context/
│   └── LocationContext.tsx
├── types/
│   └── location.ts
├── App.tsx
└── main.tsx
```

## Additional Features

1. **Toast Notifications**: User-friendly notifications for actions and errors
2. **Context-based State Management**: Centralized state management using React Context
3. **Type Safety**: Full TypeScript support
4. **Responsive Design**: Works seamlessly across all device sizes
5. **Error Handling**: Comprehensive error handling for location services and form submissions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##IMPORTANT NOTE
1.Make sure you have your own MAP api key to run the map properly 

THANK YOU FOR GIVING ME OPPORTUNItY TO BUILD THIS ASSIGNMENT IT HELP ME TO LEARN MOREJS CONCPETS AND INHANCED MY KNOWLEDGE IN JS AND REACT 
