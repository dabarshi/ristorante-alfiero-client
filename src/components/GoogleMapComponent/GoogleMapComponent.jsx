import React from "react";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 40.748817, // Latitude for the map center (e.g., New York City)
//   lng: -73.985428 // Longitude for the map center (e.g., New York City)
// };

const GoogleMapComponent = () => {
  return (
    <div className="w-full h-screen">
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.58234707502015!2d12.497291229907!3d41.90753178385991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61083926a63f%3A0xe40733b4e9ef6c2b!2sVia%20Servio%20Tullio%2C%209%2C%2000187%20Roma%20RM%2C%20Italien!5e0!3m2!1sde!2sde!4v1730472299536!5m2!1sde!2sde"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
    // <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
    //   <GoogleMap
    //     mapContainerStyle={containerStyle}
    //     center={center}
    //     zoom={10} // Zoom level
    //   >
    //     {/* Add markers or other map elements here */}
    //     <Marker position={center} />
    //   </GoogleMap>
    // </LoadScript>
  );
};

export default GoogleMapComponent;

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.58234707502015!2d12.497291229907!3d41.90753178385991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61083926a63f%3A0xe40733b4e9ef6c2b!2sVia%20Servio%20Tullio%2C%209%2C%2000187%20Roma%20RM%2C%20Italien!5e0!3m2!1sde!2sde!4v1730472299536!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
