// import React from "react";
// import { CDN_URL } from "../utils/constants";


// let RestaurantCard = ({ resData }) => {
 
//     return (
//       <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//         <img
//           className="res-logo"
//           src={`${CDN_URL + resData.info.cloudinaryImageId}`}
//           alt={resData.info.name}
//         />
//         <h3>{resData.info.name}</h3>
//         <h4>{resData.info.cuisines.join(", ")}</h4>
//         <h4>{resData.info.costForTwo}</h4>
//         <h4>{resData.info.avgRating} stars</h4>
//       </div>
//     );
//   };

//   export default RestaurantCard;
import React from "react";
import PropTypes from "prop-types";  // Importing PropTypes for prop validation
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
  } = resData.info;

  return (
    <div className="m-2 p-2 w-4" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`${CDN_URL + cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

// PropTypes validation
RestaurantCard.propTypes = {
  resData: PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cloudinaryImageId: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
      costForTwo: PropTypes.string.isRequired,
      avgRating: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RestaurantCard;
