// import React from "react";
// import { useQuery } from "react-query";

// const LocationButton = ({ location }) => {
//   const fetchLocation = async () => {
//     const res = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
//     return res.json();
//   };
//   const { data, status } = useQuery("location", fetchLocation, { enabled: false });

//   const getLocation = (location) => {
//     const locationId = location.split("/").slice(-1).pop();
//   };

//   return (
//     <button className="btn btn-primary" onClick={() => getLocation(location)}>
//       Buy Now
//     </button>
//   );
// };

// export default LocationButton;
